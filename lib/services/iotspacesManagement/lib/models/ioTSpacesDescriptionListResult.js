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

/**
 * A list of IoTSpaces description objects with a next link.
 */
class IoTSpacesDescriptionListResult extends Array {
  /**
   * Create a IoTSpacesDescriptionListResult.
   * @member {string} [nextLink] The link used to get the next page of
   * IoTSpaces description objects.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of IoTSpacesDescriptionListResult
   *
   * @returns {object} metadata of IoTSpacesDescriptionListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IoTSpacesDescriptionListResult',
      type: {
        name: 'Composite',
        className: 'IoTSpacesDescriptionListResult',
        modelProperties: {
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'IoTSpacesDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'IoTSpacesDescription'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = IoTSpacesDescriptionListResult;
