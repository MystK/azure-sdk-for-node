/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Defines workload agnostic properties for a job.
 *
 * @extends models['Resource']
 */
class JobResource extends models['Resource'] {
  /**
   * Create a JobResource.
   * @member {object} [properties] JobResource properties
   * @member {string} [properties.entityFriendlyName] Friendly name of the
   * entity on which the current job is executing.
   * @member {string} [properties.backupManagementType] Backup management type
   * to execute the current job. Possible values include: 'Invalid',
   * 'AzureIaasVM', 'MAB', 'DPM', 'AzureBackupServer', 'AzureSql'
   * @member {string} [properties.operation] The operation name.
   * @member {string} [properties.status] Job status.
   * @member {date} [properties.startTime] The start time.
   * @member {date} [properties.endTime] The end time.
   * @member {string} [properties.activityId] ActivityId of job.
   * @member {string} [properties.jobType] Polymorphic Discriminator
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JobResource
   *
   * @returns {object} metadata of JobResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobResource',
      type: {
        name: 'Composite',
        className: 'JobResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          eTag: {
            required: false,
            serializedName: 'eTag',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'jobType',
                clientName: 'jobType'
              },
              uberParent: 'Job',
              className: 'Job'
            }
          }
        }
      }
    };
  }
}

module.exports = JobResource;
