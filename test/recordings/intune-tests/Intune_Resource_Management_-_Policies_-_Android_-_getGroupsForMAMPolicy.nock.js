// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'dummy';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/providers/Microsoft.Intune/locations/fef.msua06/androidPolicies/291eee07-1963-42e2-a8ae-a456814bb051/groups?api-version=2015-01-14-preview')
  .reply(200, "{\"value\":[{\"id\":\"/providers/Microsoft.Intune/locations/fef.msua06/androidPolicies/291eee07-1963-42e2-a8ae-a456814bb051/groups/13093fbf-817b-4a97-9ed1-98164c8c852f\",\"name\":\"13093fbf-817b-4a97-9ed1-98164c8c852f\",\"type\":\"Microsoft.Intune/locations/androidPolicies/groups\",\"properties\":{\"friendlyName\":\"TestGroup-8\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '315',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-reads': '14995',
  'elapsed-time-milliseconds': '420',
  'service-name': 'AdminExperienceService',
  'client-request-id': '7ef723e5-2d97-4195-b9f8-83cc408258b1',
  'unique-request-id': 'f45dc2a0-3784-4737-8a82-8872a3c18cbd',
  'x-ms-request-id': 'f45dc2a0-3784-4737-8a82-8872a3c18cbd',
  'related-activity-id': 'f45dc2a0-3784-4737-8a82-8872a3c18cbd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'be1ddb4c-61cb-4b7c-b6ec-b80e06f6cd50',
  'x-ms-routing-request-id': 'WESTUS:20151204T223646Z:be1ddb4c-61cb-4b7c-b6ec-b80e06f6cd50',
  date: 'Fri, 04 Dec 2015 22:36:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/providers/Microsoft.Intune/locations/fef.msua06/androidPolicies/291eee07-1963-42e2-a8ae-a456814bb051/groups?api-version=2015-01-14-preview')
  .reply(200, "{\"value\":[{\"id\":\"/providers/Microsoft.Intune/locations/fef.msua06/androidPolicies/291eee07-1963-42e2-a8ae-a456814bb051/groups/13093fbf-817b-4a97-9ed1-98164c8c852f\",\"name\":\"13093fbf-817b-4a97-9ed1-98164c8c852f\",\"type\":\"Microsoft.Intune/locations/androidPolicies/groups\",\"properties\":{\"friendlyName\":\"TestGroup-8\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '315',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-reads': '14995',
  'elapsed-time-milliseconds': '420',
  'service-name': 'AdminExperienceService',
  'client-request-id': '7ef723e5-2d97-4195-b9f8-83cc408258b1',
  'unique-request-id': 'f45dc2a0-3784-4737-8a82-8872a3c18cbd',
  'x-ms-request-id': 'f45dc2a0-3784-4737-8a82-8872a3c18cbd',
  'related-activity-id': 'f45dc2a0-3784-4737-8a82-8872a3c18cbd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'be1ddb4c-61cb-4b7c-b6ec-b80e06f6cd50',
  'x-ms-routing-request-id': 'WESTUS:20151204T223646Z:be1ddb4c-61cb-4b7c-b6ec-b80e06f6cd50',
  date: 'Fri, 04 Dec 2015 22:36:45 GMT',
  connection: 'close' });
 return result; }]];