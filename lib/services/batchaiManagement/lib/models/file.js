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
 * Properties of the file or directory.
 *
 */
class File {
  /**
   * Create a File.
   * @member {string} name Name of the file.
   * @member {boolean} isDirectory Indicates if the file is a directory.
   * @member {string} [downloadUrl] Will contain an URL to download the
   * corresponding file. The downloadUrl is not returned for directories.
   * @member {date} [lastModified] The time at which the file was last
   * modified. The time at which the file was last modified.
   * @member {number} [contentLength] The file size. The file size.
   */
  constructor() {
  }

  /**
   * Defines the metadata of File
   *
   * @returns {object} metadata of File
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'File',
      type: {
        name: 'Composite',
        className: 'File',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          isDirectory: {
            required: true,
            serializedName: 'isDirectory',
            type: {
              name: 'Boolean'
            }
          },
          downloadUrl: {
            required: false,
            serializedName: 'downloadUrl',
            type: {
              name: 'String'
            }
          },
          lastModified: {
            required: false,
            serializedName: 'properties.lastModified',
            type: {
              name: 'DateTime'
            }
          },
          contentLength: {
            required: false,
            serializedName: 'properties.contentLength',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = File;
