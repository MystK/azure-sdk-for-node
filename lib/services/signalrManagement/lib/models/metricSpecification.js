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
 * Specifications of the Metrics for Azure Monitoring.
 *
 */
class MetricSpecification {
  /**
   * Create a MetricSpecification.
   * @member {string} [name] Name of the metric.
   * @member {string} [displayName] Localized friendly display name of the
   * metric.
   * @member {string} [displayDescription] Localized friendly description of
   * the metric.
   * @member {string} [unit] The unit that makes sense for the metric.
   * @member {string} [aggregationType] Only provide one value for this field.
   * Valid values: Average, Minimum, Maximum, Total, Count.
   * @member {string} [fillGapWithZero] Optional. If set to true, then zero
   * will be returned for time duration where no metric is emitted/published.
   * Ex. a metric that returns the number of times a particular error code was
   * emitted. The error code may not appear
   * often, instead of the RP publishing 0, Shoebox can auto fill in 0s for
   * time periods where nothing was emitted.
   * @member {string} [category] The name of the metric category that the
   * metric belongs to. A metric can only belong to a single category.
   */
  constructor() {
  }

  /**
   * Defines the metadata of MetricSpecification
   *
   * @returns {object} metadata of MetricSpecification
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MetricSpecification',
      type: {
        name: 'Composite',
        className: 'MetricSpecification',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          displayDescription: {
            required: false,
            serializedName: 'displayDescription',
            type: {
              name: 'String'
            }
          },
          unit: {
            required: false,
            serializedName: 'unit',
            type: {
              name: 'String'
            }
          },
          aggregationType: {
            required: false,
            serializedName: 'aggregationType',
            type: {
              name: 'String'
            }
          },
          fillGapWithZero: {
            required: false,
            serializedName: 'fillGapWithZero',
            type: {
              name: 'String'
            }
          },
          category: {
            required: false,
            serializedName: 'category',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MetricSpecification;
