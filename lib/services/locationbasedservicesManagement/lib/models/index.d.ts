/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the ErrorDetailsItem class.
 * @constructor
 * @member {string} [code] Error code.
 * @member {string} [message] If available, a human readable description of the
 * error.
 * @member {string} [target] If available, the component generating the error.
 */
export interface ErrorDetailsItem {
  readonly code?: string;
  readonly message?: string;
  readonly target?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * This object is returned when an error occurs in the Location Based Service
 * API
 *
 * @member {string} [code] Error code.
 * @member {string} [message] If available, a human readable description of the
 * error.
 * @member {string} [target] If available, the component generating the error.
 * @member {array} [details] If available, a list of additional details about
 * the error.
 */
export interface ErrorModel {
  readonly code?: string;
  readonly message?: string;
  readonly target?: string;
  readonly details?: ErrorDetailsItem[];
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * An Azure resource
 *
 * @member {string} [id] The fully qualified Location Based Services Account
 * resource identifier.
 * @member {string} [name] The name of the Location Based Services Account,
 * which is unique within a Resource Group.
 * @member {string} [type] Azure resource type.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the Sku class.
 * @constructor
 * The SKU of the Location Based Services Account.
 *
 * @member {string} name The name of the SKU, in standard format (such as S0).
 * @member {string} [tier] Gets the sku tier. This is based on the SKU name.
 */
export interface Sku {
  name: string;
  readonly tier?: string;
}

/**
 * @class
 * Initializes a new instance of the LocationBasedServicesAccount class.
 * @constructor
 * An Azure resource which represents access to a suite of Location Based
 * Services REST APIs.
 *
 * @member {string} [location] The location of the resource.
 * @member {object} [tags] Gets a list of key value pairs that describe the
 * resource. These tags can be used in viewing and grouping this resource
 * (across resource groups). A maximum of 15 tags can be provided for a
 * resource. Each tag must have a key no greater than 128 characters and value
 * no greater than 256 characters.
 * @member {object} [sku] The SKU of this account.
 * @member {string} [sku.name] The name of the SKU, in standard format (such as
 * S0).
 * @member {string} [sku.tier] Gets the sku tier. This is based on the SKU
 * name.
 */
export interface LocationBasedServicesAccount extends Resource {
  readonly location?: string;
  readonly tags?: { [propertyName: string]: string };
  readonly sku?: Sku;
}

/**
 * @class
 * Initializes a new instance of the LocationBasedServicesAccountCreateParameters class.
 * @constructor
 * Parameters used to create a new Location Based Services Account.
 *
 * @member {string} location The location of the resource.
 * @member {object} [tags] Gets or sets a list of key value pairs that describe
 * the resource. These tags can be used in viewing and grouping this resource
 * (across resource groups). A maximum of 15 tags can be provided for a
 * resource. Each tag must have a key no greater than 128 characters and value
 * no greater than 256 characters.
 * @member {object} sku The SKU of this account.
 * @member {string} [sku.name] The name of the SKU, in standard format (such as
 * S0).
 * @member {string} [sku.tier] Gets the sku tier. This is based on the SKU
 * name.
 */
export interface LocationBasedServicesAccountCreateParameters {
  location: string;
  tags?: { [propertyName: string]: string };
  sku: Sku;
}

/**
 * @class
 * Initializes a new instance of the LocationBasedServicesAccountUpdateParameters class.
 * @constructor
 * Parameters used to update an existing Location Based Services Account.
 *
 * @member {object} [tags] Gets or sets a list of key value pairs that describe
 * the resource. These tags can be used in viewing and grouping this resource
 * (across resource groups). A maximum of 15 tags can be provided for a
 * resource. Each tag must have a key no greater than 128 characters and value
 * no greater than 256 characters.
 * @member {object} [sku] The SKU of this account.
 * @member {string} [sku.name] The name of the SKU, in standard format (such as
 * S0).
 * @member {string} [sku.tier] Gets the sku tier. This is based on the SKU
 * name.
 */
export interface LocationBasedServicesAccountUpdateParameters {
  tags?: { [propertyName: string]: string };
  sku?: Sku;
}

/**
 * @class
 * Initializes a new instance of the LocationBasedServicesAccountsMoveRequest class.
 * @constructor
 * The description of what resources to move between resource groups.
 *
 * @member {string} targetResourceGroup The name of the destination resource
 * group.
 * @member {array} resourceIds A list of resource names to move from the source
 * resource group.
 */
export interface LocationBasedServicesAccountsMoveRequest {
  targetResourceGroup: string;
  resourceIds: string[];
}

/**
 * @class
 * Initializes a new instance of the LocationBasedServicesKeySpecification class.
 * @constructor
 * Whether the operation refers to the primary or secondary key.
 *
 * @member {string} keyType Whether the operation refers to the primary or
 * secondary key. Possible values include: 'primary', 'secondary'
 */
export interface LocationBasedServicesKeySpecification {
  keyType: string;
}

/**
 * @class
 * Initializes a new instance of the LocationBasedServicesAccountKeys class.
 * @constructor
 * The set of keys which can be used to access the Location Based Services REST
 * APIs. Two keys are provided for key rotation without interruption.
 *
 * @member {string} [id] The full Azure resource identifier of the Location
 * Based Services Account.
 * @member {string} [primaryKey] The primary key for accessing the Location
 * Based Services REST APIs.
 * @member {string} [secondaryKey] The secondary key for accessing the Location
 * Based Services REST APIs.
 */
export interface LocationBasedServicesAccountKeys {
  readonly id?: string;
  readonly primaryKey?: string;
  readonly secondaryKey?: string;
}

/**
 * @class
 * Initializes a new instance of the LocationBasedServicesOperationsValueItemDisplay class.
 * @constructor
 * The human-readable description of the operation.
 *
 * @member {string} [provider] Service provider: Microsoft Location Based
 * Services.
 * @member {string} [resource] Resource on which the operation is performed.
 * @member {string} [operation] The action that users can perform, based on
 * their permission level.
 * @member {string} [description] The description of the operation.
 */
export interface LocationBasedServicesOperationsValueItemDisplay {
  readonly provider?: string;
  readonly resource?: string;
  readonly operation?: string;
  readonly description?: string;
}

/**
 * @class
 * Initializes a new instance of the LocationBasedServicesOperationsValueItem class.
 * @constructor
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}.
 * @member {object} [display] The human-readable description of the operation.
 * @member {string} [display.provider] Service provider: Microsoft Location
 * Based Services.
 * @member {string} [display.resource] Resource on which the operation is
 * performed.
 * @member {string} [display.operation] The action that users can perform,
 * based on their permission level.
 * @member {string} [display.description] The description of the operation.
 * @member {string} [origin] The origin of the operation.
 */
export interface LocationBasedServicesOperationsValueItem {
  readonly name?: string;
  display?: LocationBasedServicesOperationsValueItemDisplay;
  readonly origin?: string;
}


/**
 * @class
 * Initializes a new instance of the LocationBasedServicesAccounts class.
 * @constructor
 * A list of Location Based Services Accounts.
 *
 */
export interface LocationBasedServicesAccounts extends Array<LocationBasedServicesAccount> {
}

/**
 * @class
 * Initializes a new instance of the LocationBasedServicesOperations class.
 * @constructor
 * The set of operations available for Location Based Services.
 *
 */
export interface LocationBasedServicesOperations extends Array<LocationBasedServicesOperationsValueItem> {
}