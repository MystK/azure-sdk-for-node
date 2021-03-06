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
 * The BZip2 compression method used on a dataset.
 *
 * @extends models['DatasetCompression']
 */
class DatasetBZip2Compression extends models['DatasetCompression'] {
  /**
   * Create a DatasetBZip2Compression.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DatasetBZip2Compression
   *
   * @returns {object} metadata of DatasetBZip2Compression
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BZip2',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'DatasetCompression',
        className: 'DatasetBZip2Compression',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DatasetBZip2Compression;
