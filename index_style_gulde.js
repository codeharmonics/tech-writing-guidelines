// npm install showdown
// npm install algoliasearch
// npm install jsdom

function sendToAlgolia(records) {

    const algoliasearch = require('algoliasearch');

    const client = algoliasearch('97B70U0A4O', '9b244155b0f3b81eb604cff3313f3f92');
    //const client = algoliasearch('7EXY6WCVKT', '1f7ae580e0aad5c775c8c63212bfddec');

    const index = client.initIndex('style_guide');
    const tmpIndex = client.initIndex('style_guide_tmp');

    index.clearIndex().catch(err => {
    })
    .then(({ taskID }) =>
        index.waitTask(taskID)
    )

    tmpIndex.clearIndex().catch(err => {
    })
    .then(({ taskID }) =>
        tmpIndex.waitTask(taskID)
    )

    client
      .copyIndex(index.indexName, tmpIndex.indexName, [
        'settings',
        'synonyms',
        'rules'
      ])
      .then(({ taskID }) =>
        tmpIndex.waitTask(taskID)
      )
      .then(() => {
        records.forEach(function(objects) { 
            //console.log(objects);

            tmpIndex.addObjects(objects)
            .then(({ taskID }) =>
                tmpIndex.waitTask(taskID)
            )});
      })
      .then(() =>
        client.moveIndex(tmpIndex.indexName, index.indexName)
      )
      .then(({ taskID }) =>
        index.waitTask(taskID)
      )
      .catch(err => {
        console.error(err);
      })
      .then(() =>
        client
          .deleteIndex(tmpIndex.indexName)
      )
      .then(({ taskID }) =>
        tmpIndex.waitTask(taskID)
      );

};

function createRecord(pageName, tagName, tagLink, tagContent, hierarchy) {
    var record = {};
    record["objectID"] = pageName + "±" + tagName + "±" + tagLink + "±" + Math.floor((Math.random() * 100000) + 1);
    record["pageName"] = pageName;
    record["tagName"] = tagName;
    record["tagLink"] = tagLink;
    record["tagContent"] = tagContent; //.substring(0,10);
    record["hierarchy"] = hierarchy;

    return record;
};

function getCurrentHierarchy(pageLayout, rootHeader, tagNum, tagName,  tagLink) {

    var newNode = tagName + "," + tagLink;
    var currentHierarchy = [];

    for (i = rootHeader; i < pageLayout.length; i++) { 
        
        if (pageLayout[i][0][0] === "H") {
            if (pageLayout[i][0][1] > tagName[1]) {
                rootHeader = i;
                currentHierarchy[0] = newNode;
                break;
            }
            else if (pageLayout[i][0][1] === tagName[1]) {
                currentHierarchy[tagName[1]-1] = newNode;
            }
            else {
                currentHierarchy[(pageLayout[i][0][1])-1] = pageLayout[i];
            }
        }
    }

    if (tagName[0] === "P") {
        currentHierarchy[currentHierarchy.length] = newNode;
    }

    var hierarchy = "";
    for (i = 0; i < currentHierarchy.length; i++) { 
        hierarchy = hierarchy + currentHierarchy[i] + ";";
    }
    if (hierarchy.length>0) {
        hierarchy = hierarchy.substring(0,hierarchy.length-1);
    }

    return [rootHeader, hierarchy];
};

function getAllPageRecords(pageName, body) {

    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    
    var tagNum = 0;
    var pageLayout = [];
    var rootHeader = 0;
    var hierarchy = [];
    
    var records = [];
    var recordCount = 0;

    const dom = new JSDOM(body);
    var navElements = dom.window.document.querySelectorAll("h1, h2, h3, h4, h5, p");
    navElements.forEach(function(navElement) {
        //console.log(navElement.tagName, ', ', navElement.textContent);

        var tagName = navElement.tagName.trim();
        var tagLink = navElement.id;

        pageLayout[tagNum++] = [tagName, tagLink];

        hierarchy = getCurrentHierarchy(pageLayout, rootHeader, tagNum, tagName,  tagLink);
        rootHeader = hierarchy[0];

        records[recordCount++] = createRecord(pageName, tagName, tagLink, navElement.textContent.trim(), hierarchy[1]);

       });

    return records;
};

function create_HTML_files_from_MD_files(filePathAndName, contents) {
    var fs = require('fs');

    fs.writeFile(filePathAndName, contents, function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
};

function indexAllStyleGuidePages_MD() {
    const showdown = require('showdown');

    var fs = require('fs');
    var files = fs.readdirSync('md');

    var records = [];
    var recordCount = 0;

    files.forEach(function(file) {

        fs.readFile("md/"+file, function(err, buf) {

            var converter = new showdown.Converter();
            var html = converter.makeHtml(buf.toString());
            records[recordCount++] = getAllPageRecords(file.replace(".md",".html"), html);

            //create_HTML_files_from_MD_files("html/"+file.replace(".md",".html"), html);
        });
    });

    sendToAlgolia(records);
};

function indexAllStyleGuidePages_HTML() {

    var fs = require('fs');
    var files = fs.readdirSync('html');

    var records = [];
    var recordCount = 0;

    files.forEach(function(file) {
        fs.readFile("html/"+file, function(err, buf) {

            var html = buf.toString();

            records[recordCount++] = getAllPageRecords(file, html);

        });
    });
    sendToAlgolia(records);
};

indexAllStyleGuidePages_MD();
//indexAllStyleGuidePages_HTML();
