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
 * Properties controlling TLS Certificate Validation.
 *
 */
class BackendTlsProperties {
  /**
   * Create a BackendTlsProperties.
   * @member {boolean} [validateCertificateChain] Flag indicating whether SSL
   * certificate chain validation should be done when using self-signed
   * certificates for this backend host. Default value: true .
   * @member {boolean} [validateCertificateName] Flag indicating whether SSL
   * certificate name validation should be done when using self-signed
   * certificates for this backend host. Default value: true .
   */
  constructor() {
  }

  /**
   * Defines the metadata of BackendTlsProperties
   *
   * @returns {object} metadata of BackendTlsProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackendTlsProperties',
      type: {
        name: 'Composite',
        className: 'BackendTlsProperties',
        modelProperties: {
          validateCertificateChain: {
            required: false,
            serializedName: 'validateCertificateChain',
            defaultValue: true,
            type: {
              name: 'Boolean'
            }
          },
          validateCertificateName: {
            required: false,
            serializedName: 'validateCertificateName',
            defaultValue: true,
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = BackendTlsProperties;