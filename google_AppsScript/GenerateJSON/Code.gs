const doGet = (event = {}) => {
  const { parameter } = event;
  const { tab } = parameter;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(tab);
  if (sheet != null) {
    var result = [];

    var data = sheet.getDataRange().getValues();
    const headers = data[0];
    data.shift();
    data.forEach((item) => {
      var obj = {};
      item.forEach((v, i) => {
        obj[headers[i]] = v;
      });
      result.push(obj);
    });

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } else {
    const err = { result: false, err: "no tab found" };
    return ContentService.createTextOutput(JSON.stringify(err))
      .setMimeType(ContentService.MimeType.JSON);
  }
};

