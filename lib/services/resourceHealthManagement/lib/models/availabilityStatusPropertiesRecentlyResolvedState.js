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
 * An annotation describing a change in the availabilityState to Available from
 * Unavailable with a reasonType of type Unplanned
 *
 */
class AvailabilityStatusPropertiesRecentlyResolvedState {
  /**
   * Create a AvailabilityStatusPropertiesRecentlyResolvedState.
   * @member {date} [unavailableOccurredTime] Timestamp for when the
   * availabilityState changed to Unavailable
   * @member {date} [resolvedTime] Timestamp when the availabilityState changes
   * to Available.
   * @member {string} [unavailabilitySummary] Brief description of cause of the
   * resource becoming unavailable.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AvailabilityStatusPropertiesRecentlyResolvedState
   *
   * @returns {object} metadata of AvailabilityStatusPropertiesRecentlyResolvedState
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'availabilityStatus_properties_recentlyResolvedState',
      type: {
        name: 'Composite',
        className: 'AvailabilityStatusPropertiesRecentlyResolvedState',
        modelProperties: {
          unavailableOccurredTime: {
            required: false,
            serializedName: 'unavailableOccurredTime',
            type: {
              name: 'DateTime'
            }
          },
          resolvedTime: {
            required: false,
            serializedName: 'resolvedTime',
            type: {
              name: 'DateTime'
            }
          },
          unavailabilitySummary: {
            required: false,
            serializedName: 'unavailabilitySummary',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AvailabilityStatusPropertiesRecentlyResolvedState;