// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadla1139.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2015-11-01-preview')
  .reply(200, "{\"value\":[{\"jobId\":\"27063d38-6580-4e2d-8876-8d5dd92a44c7\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"Mon, 07 Mar 2016 22:32:47 GMT\",\"startTime\":null,\"endTime\":\"Mon, 07 Mar 2016 22:32:48 GMT\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":null,\"properties\":null},{\"jobId\":\"fdf77648-8e3a-4488-9f2d-bc11b7480577\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"Mon, 07 Mar 2016 22:31:41 GMT\",\"startTime\":\"Mon, 07 Mar 2016 22:32:22 GMT\",\"endTime\":\"Mon, 07 Mar 2016 22:32:26 GMT\",\"state\":\"Ended\",\"result\":\"Succeeded\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":null,\"properties\":null}],\"nextLink\":null,\"count\":null}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '32c0de54-938b-4f55-8f7d-d5e810bab18e',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:32:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla1139.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2015-11-01-preview')
  .reply(200, "{\"value\":[{\"jobId\":\"27063d38-6580-4e2d-8876-8d5dd92a44c7\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"Mon, 07 Mar 2016 22:32:47 GMT\",\"startTime\":null,\"endTime\":\"Mon, 07 Mar 2016 22:32:48 GMT\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":null,\"properties\":null},{\"jobId\":\"fdf77648-8e3a-4488-9f2d-bc11b7480577\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"Mon, 07 Mar 2016 22:31:41 GMT\",\"startTime\":\"Mon, 07 Mar 2016 22:32:22 GMT\",\"endTime\":\"Mon, 07 Mar 2016 22:32:26 GMT\",\"state\":\"Ended\",\"result\":\"Succeeded\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":null,\"properties\":null}],\"nextLink\":null,\"count\":null}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '32c0de54-938b-4f55-8f7d-d5e810bab18e',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:32:49 GMT',
  connection: 'close' });
 return result; }]];