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
 * Solution properties supported by the OperationsManagement resource provider.
 *
 * @extends models['BaseResource']
 */
class SolutionProperties extends models['BaseResource'] {
  /**
   * Create a SolutionProperties.
   * @member {string} workspaceResourceId The azure resourceId for the
   * workspace where the solution will be deployed/enabled.
   * @member {string} [provisioningState] The provisioning state for the
   * solution.
   * @member {array} [containedResources] The azure resources that will be
   * contained within the solutions. They will be locked and gets deleted
   * automatically when the solution is deleted.
   * @member {array} [referencedResources] The resources that will be
   * referenced from this solution. Deleting any of those solution out of band
   * will break the solution.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SolutionProperties
   *
   * @returns {object} metadata of SolutionProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SolutionProperties',
      type: {
        name: 'Composite',
        className: 'SolutionProperties',
        modelProperties: {
          workspaceResourceId: {
            required: true,
            serializedName: 'workspaceResourceId',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          },
          containedResources: {
            required: false,
            serializedName: 'containedResources',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          referencedResources: {
            required: false,
            serializedName: 'referencedResources',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = SolutionProperties;
