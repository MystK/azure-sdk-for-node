// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e2ee545b-783f-4634-a277-e35f55c90660';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4813/providers/Microsoft.Cdn/profiles?api-version=2017-10-12')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestProfile8673\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4813/providers/Microsoft.Cdn/profiles/cdnTestProfile8673\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n      },\"location\":\"EastUs\",\"sku\":{\r\n        \"name\":\"Premium_Verizon\"\r\n      },\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '462',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '87a5ec71-4cec-4ce2-aef3-f4dc9072e3fa',
  'x-ms-client-request-id': '8981a8b6-71a0-4a1a-9d30-78365f84efab',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '94bcd6e3-4436-4878-a80a-d3b9771f71b6',
  'x-ms-routing-request-id': 'WESTUS2:20180226T194051Z:94bcd6e3-4436-4878-a80a-d3b9771f71b6',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:40:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup4813/providers/Microsoft.Cdn/profiles?api-version=2017-10-12')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestProfile8673\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup4813/providers/Microsoft.Cdn/profiles/cdnTestProfile8673\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n      },\"location\":\"EastUs\",\"sku\":{\r\n        \"name\":\"Premium_Verizon\"\r\n      },\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '462',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '87a5ec71-4cec-4ce2-aef3-f4dc9072e3fa',
  'x-ms-client-request-id': '8981a8b6-71a0-4a1a-9d30-78365f84efab',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '94bcd6e3-4436-4878-a80a-d3b9771f71b6',
  'x-ms-routing-request-id': 'WESTUS2:20180226T194051Z:94bcd6e3-4436-4878-a80a-d3b9771f71b6',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:40:51 GMT',
  connection: 'close' });
 return result; }]];