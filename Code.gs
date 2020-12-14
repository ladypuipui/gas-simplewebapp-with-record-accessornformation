function getScriptUrl() {
    var url = ScriptApp.getService().getUrl();
    return url;
}

function doGet(e) {
  var email = Session.getActiveUser().getEmail();
  var id = "abcdefghijklmnopqrstuvwxyz12345678910";  // Enter the string at the end of the spreadsheet URL.
  var spreadSheet = SpreadsheetApp.openById(id);  
  var sheetName = "テストサイト"; // Write the sheet name here, not the book name.
  var page = e.parameter["p"];
  
  // Page's Routing
  
  if(page =="hogehoge"){
    spreadSheet.getSheetByName(sheetName).appendRow(
    [new Date(), email, page]
  );
    return HtmlService.createHtmlOutputFromFile('hogehoge');
  }
  else if(page =="hugahuga"){
    spreadSheet.getSheetByName(sheetName).appendRow(
    [new Date(), email, page]
  );
    return HtmlService.createHtmlOutputFromFile('hugahuga');
  }
  else if(page =="piyopiyo"){
    spreadSheet.getSheetByName(sheetName).appendRow(
    [new Date(), email, page]
  );
    return HtmlService.createHtmlOutputFromFile('piyopiyo');
  }
  else{
    spreadSheet.getSheetByName(sheetName).appendRow(
    [new Date(), email, "top page"]
  );
    return HtmlService.createTemplateFromFile('index').evaluate();
  }
  }
