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
 * Initializes a new instance of the ImportSource class.
 * @constructor
 * @member {string} resourceId The resource identifier of the source Azure
 * Container Registry.
 */
export interface ImportSource {
  resourceId: string;
}

/**
 * @class
 * Initializes a new instance of the ImportImageParameters class.
 * @constructor
 * @member {string} sourceRepository Repository name of the source image.
 * @member {string} [sourceTag] The tag name of the source image.  When both
 * source tag and source manifest are omitted the 'latest' tag will be used.
 * Exclusive with SourceManifestDigest.
 * @member {string} [sourceManifestDigest] The manifest sha of the source
 * image. Exclusive with SourceTag.
 * @member {object} source The source of the image.
 * @member {string} [source.resourceId] The resource identifier of the source
 * Azure Container Registry.
 * @member {array} [targetTags] List of strings of the form repo[:tag].  When
 * tag is omitted the source will be used (or 'latest' if source tag is also
 * omitted.)
 * @member {array} [untaggedTargetRepositories] List of strings of repository
 * names to do a manifest only copy.  No tag will be created.
 * @member {string} [mode] When Force, any existing target tags will be
 * overwritten.  When NoForce, any existing target tags will fail the operation
 * before any copying begins.
 * NoForce is the default. Possible values include: 'NoForce', 'Force'
 */
export interface ImportImageParameters {
  sourceRepository: string;
  sourceTag?: string;
  sourceManifestDigest?: string;
  source: ImportSource;
  targetTags?: string[];
  untaggedTargetRepositories?: string[];
  mode?: string;
}

/**
 * @class
 * Initializes a new instance of the RegistryNameCheckRequest class.
 * @constructor
 * A request to check whether a container registry name is available.
 *
 * @member {string} name The name of the container registry.
 */
export interface RegistryNameCheckRequest {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the RegistryNameStatus class.
 * @constructor
 * The result of a request to check the availability of a container registry
 * name.
 *
 * @member {boolean} [nameAvailable] The value that indicates whether the name
 * is available.
 * @member {string} [reason] If any, the reason that the name is not available.
 * @member {string} [message] If any, the error message that provides more
 * detail for the reason that the name is not available.
 */
export interface RegistryNameStatus {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplayDefinition class.
 * @constructor
 * The display information for a container registry operation.
 *
 * @member {string} [provider] The resource provider name:
 * Microsoft.ContainerRegistry.
 * @member {string} [resource] The resource on which the operation is
 * performed.
 * @member {string} [operation] The operation that users can perform.
 * @member {string} [description] The description for the operation.
 */
export interface OperationDisplayDefinition {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDefinition class.
 * @constructor
 * The definition of a container registry operation.
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}.
 * @member {object} [display] The display information for the container
 * registry operation.
 * @member {string} [display.provider] The resource provider name:
 * Microsoft.ContainerRegistry.
 * @member {string} [display.resource] The resource on which the operation is
 * performed.
 * @member {string} [display.operation] The operation that users can perform.
 * @member {string} [display.description] The description for the operation.
 */
export interface OperationDefinition {
  name?: string;
  display?: OperationDisplayDefinition;
}

/**
 * @class
 * Initializes a new instance of the Sku class.
 * @constructor
 * The SKU of a container registry.
 *
 * @member {string} name The SKU name of the container registry. Required for
 * registry creation. Possible values include: 'Classic', 'Basic', 'Standard',
 * 'Premium'
 * @member {string} [tier] The SKU tier based on the SKU name. Possible values
 * include: 'Classic', 'Basic', 'Standard', 'Premium'
 */
export interface Sku {
  name: string;
  readonly tier?: string;
}

/**
 * @class
 * Initializes a new instance of the Status class.
 * @constructor
 * The status of an Azure resource at the time the operation was called.
 *
 * @member {string} [displayStatus] The short label for the status.
 * @member {string} [message] The detailed message for the status, including
 * alerts and error messages.
 * @member {date} [timestamp] The timestamp when the status was changed to the
 * current value.
 */
export interface Status {
  readonly displayStatus?: string;
  readonly message?: string;
  readonly timestamp?: Date;
}

/**
 * @class
 * Initializes a new instance of the StorageAccountProperties class.
 * @constructor
 * The properties of a storage account for a container registry. Only
 * applicable to Classic SKU.
 *
 * @member {string} id The resource ID of the storage account.
 */
export interface StorageAccountProperties {
  id: string;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * An Azure resource.
 *
 * @member {string} [id] The resource ID.
 * @member {string} [name] The name of the resource.
 * @member {string} [type] The type of the resource.
 * @member {string} location The location of the resource. This cannot be
 * changed after the resource is created.
 * @member {object} [tags] The tags of the resource.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Registry class.
 * @constructor
 * An object that represents a container registry.
 *
 * @member {object} sku The SKU of the container registry.
 * @member {string} [sku.name] The SKU name of the container registry. Required
 * for registry creation. Possible values include: 'Classic', 'Basic',
 * 'Standard', 'Premium'
 * @member {string} [sku.tier] The SKU tier based on the SKU name. Possible
 * values include: 'Classic', 'Basic', 'Standard', 'Premium'
 * @member {string} [loginServer] The URL that can be used to log into the
 * container registry.
 * @member {date} [creationDate] The creation date of the container registry in
 * ISO8601 format.
 * @member {string} [provisioningState] The provisioning state of the container
 * registry at the time the operation was called. Possible values include:
 * 'Creating', 'Updating', 'Deleting', 'Succeeded', 'Failed', 'Canceled'
 * @member {object} [status] The status of the container registry at the time
 * the operation was called.
 * @member {string} [status.displayStatus] The short label for the status.
 * @member {string} [status.message] The detailed message for the status,
 * including alerts and error messages.
 * @member {date} [status.timestamp] The timestamp when the status was changed
 * to the current value.
 * @member {boolean} [adminUserEnabled] The value that indicates whether the
 * admin user is enabled. Default value: false .
 * @member {object} [storageAccount] The properties of the storage account for
 * the container registry. Only applicable to Classic SKU.
 * @member {string} [storageAccount.id] The resource ID of the storage account.
 */
export interface Registry extends Resource {
  sku: Sku;
  readonly loginServer?: string;
  readonly creationDate?: Date;
  readonly provisioningState?: string;
  readonly status?: Status;
  adminUserEnabled?: boolean;
  storageAccount?: StorageAccountProperties;
}

/**
 * @class
 * Initializes a new instance of the RegistryUpdateParameters class.
 * @constructor
 * The parameters for updating a container registry.
 *
 * @member {object} [tags] The tags for the container registry.
 * @member {object} [sku] The SKU of the container registry.
 * @member {string} [sku.name] The SKU name of the container registry. Required
 * for registry creation. Possible values include: 'Classic', 'Basic',
 * 'Standard', 'Premium'
 * @member {string} [sku.tier] The SKU tier based on the SKU name. Possible
 * values include: 'Classic', 'Basic', 'Standard', 'Premium'
 * @member {boolean} [adminUserEnabled] The value that indicates whether the
 * admin user is enabled.
 * @member {object} [storageAccount] The parameters of a storage account for
 * the container registry. Only applicable to Classic SKU. If specified, the
 * storage account must be in the same physical location as the container
 * registry.
 * @member {string} [storageAccount.id] The resource ID of the storage account.
 */
export interface RegistryUpdateParameters {
  tags?: { [propertyName: string]: string };
  sku?: Sku;
  adminUserEnabled?: boolean;
  storageAccount?: StorageAccountProperties;
}

/**
 * @class
 * Initializes a new instance of the RegistryPassword class.
 * @constructor
 * The login password for the container registry.
 *
 * @member {string} [name] The password name. Possible values include:
 * 'password', 'password2'
 * @member {string} [value] The password value.
 */
export interface RegistryPassword {
  name?: string;
  value?: string;
}

/**
 * @class
 * Initializes a new instance of the RegistryListCredentialsResult class.
 * @constructor
 * The response from the ListCredentials operation.
 *
 * @member {string} [username] The username for a container registry.
 * @member {array} [passwords] The list of passwords for a container registry.
 */
export interface RegistryListCredentialsResult {
  username?: string;
  passwords?: RegistryPassword[];
}

/**
 * @class
 * Initializes a new instance of the RegenerateCredentialParameters class.
 * @constructor
 * The parameters used to regenerate the login credential.
 *
 * @member {string} name Specifies name of the password which should be
 * regenerated -- password or password2. Possible values include: 'password',
 * 'password2'
 */
export interface RegenerateCredentialParameters {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the RegistryUsage class.
 * @constructor
 * The quota usage for a container registry.
 *
 * @member {string} [name] The name of the usage.
 * @member {number} [limit] The limit of the usage.
 * @member {number} [currentValue] The current value of the usage.
 * @member {string} [unit] The unit of measurement. Possible values include:
 * 'Count', 'Bytes'
 */
export interface RegistryUsage {
  name?: string;
  limit?: number;
  currentValue?: number;
  unit?: string;
}

/**
 * @class
 * Initializes a new instance of the RegistryUsageListResult class.
 * @constructor
 * The result of a request to get container registry quota usages.
 *
 * @member {array} [value] The list of container registry quota usages.
 */
export interface RegistryUsageListResult {
  value?: RegistryUsage[];
}

/**
 * @class
 * Initializes a new instance of the Replication class.
 * @constructor
 * An object that represents a replication for a container registry.
 *
 * @member {string} [provisioningState] The provisioning state of the
 * replication at the time the operation was called. Possible values include:
 * 'Creating', 'Updating', 'Deleting', 'Succeeded', 'Failed', 'Canceled'
 * @member {object} [status] The status of the replication at the time the
 * operation was called.
 * @member {string} [status.displayStatus] The short label for the status.
 * @member {string} [status.message] The detailed message for the status,
 * including alerts and error messages.
 * @member {date} [status.timestamp] The timestamp when the status was changed
 * to the current value.
 */
export interface Replication extends Resource {
  readonly provisioningState?: string;
  readonly status?: Status;
}

/**
 * @class
 * Initializes a new instance of the ReplicationUpdateParameters class.
 * @constructor
 * The parameters for updating a replication.
 *
 * @member {object} [tags] The tags for the replication.
 */
export interface ReplicationUpdateParameters {
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Webhook class.
 * @constructor
 * An object that represents a webhook for a container registry.
 *
 * @member {string} [status] The status of the webhook at the time the
 * operation was called. Possible values include: 'enabled', 'disabled'
 * @member {string} [scope] The scope of repositories where the event can be
 * triggered. For example, 'foo:*' means events for all tags under repository
 * 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to
 * 'foo:latest'. Empty means all events.
 * @member {array} actions The list of actions that trigger the webhook to post
 * notifications.
 * @member {string} [provisioningState] The provisioning state of the webhook
 * at the time the operation was called. Possible values include: 'Creating',
 * 'Updating', 'Deleting', 'Succeeded', 'Failed', 'Canceled'
 */
export interface Webhook extends Resource {
  status?: string;
  scope?: string;
  actions: string[];
  readonly provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the WebhookCreateParameters class.
 * @constructor
 * The parameters for creating a webhook.
 *
 * @member {object} [tags] The tags for the webhook.
 * @member {string} location The location of the webhook. This cannot be
 * changed after the resource is created.
 * @member {string} serviceUri The service URI for the webhook to post
 * notifications.
 * @member {object} [customHeaders] Custom headers that will be added to the
 * webhook notifications.
 * @member {string} [status] The status of the webhook at the time the
 * operation was called. Possible values include: 'enabled', 'disabled'
 * @member {string} [scope] The scope of repositories where the event can be
 * triggered. For example, 'foo:*' means events for all tags under repository
 * 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to
 * 'foo:latest'. Empty means all events.
 * @member {array} actions The list of actions that trigger the webhook to post
 * notifications.
 */
export interface WebhookCreateParameters {
  tags?: { [propertyName: string]: string };
  location: string;
  serviceUri: string;
  customHeaders?: { [propertyName: string]: string };
  status?: string;
  scope?: string;
  actions: string[];
}

/**
 * @class
 * Initializes a new instance of the WebhookUpdateParameters class.
 * @constructor
 * The parameters for updating a webhook.
 *
 * @member {object} [tags] The tags for the webhook.
 * @member {string} [serviceUri] The service URI for the webhook to post
 * notifications.
 * @member {object} [customHeaders] Custom headers that will be added to the
 * webhook notifications.
 * @member {string} [status] The status of the webhook at the time the
 * operation was called. Possible values include: 'enabled', 'disabled'
 * @member {string} [scope] The scope of repositories where the event can be
 * triggered. For example, 'foo:*' means events for all tags under repository
 * 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to
 * 'foo:latest'. Empty means all events.
 * @member {array} [actions] The list of actions that trigger the webhook to
 * post notifications.
 */
export interface WebhookUpdateParameters {
  tags?: { [propertyName: string]: string };
  serviceUri?: string;
  customHeaders?: { [propertyName: string]: string };
  status?: string;
  scope?: string;
  actions?: string[];
}

/**
 * @class
 * Initializes a new instance of the EventInfo class.
 * @constructor
 * The basic information of an event.
 *
 * @member {string} [id] The event ID.
 */
export interface EventInfo {
  id?: string;
}

/**
 * @class
 * Initializes a new instance of the CallbackConfig class.
 * @constructor
 * The configuration of service URI and custom headers for the webhook.
 *
 * @member {string} serviceUri The service URI for the webhook to post
 * notifications.
 * @member {object} [customHeaders] Custom headers that will be added to the
 * webhook notifications.
 */
export interface CallbackConfig {
  serviceUri: string;
  customHeaders?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Target class.
 * @constructor
 * The target of the event.
 *
 * @member {string} [mediaType] The MIME type of the referenced object.
 * @member {number} [size] The number of bytes of the content. Same as Length
 * field.
 * @member {string} [digest] The digest of the content, as defined by the
 * Registry V2 HTTP API Specification.
 * @member {number} [length] The number of bytes of the content. Same as Size
 * field.
 * @member {string} [repository] The repository name.
 * @member {string} [url] The direct URL to the content.
 * @member {string} [tag] The tag name.
 */
export interface Target {
  mediaType?: string;
  size?: number;
  digest?: string;
  length?: number;
  repository?: string;
  url?: string;
  tag?: string;
}

/**
 * @class
 * Initializes a new instance of the Request class.
 * @constructor
 * The request that generated the event.
 *
 * @member {string} [id] The ID of the request that initiated the event.
 * @member {string} [addr] The IP or hostname and possibly port of the client
 * connection that initiated the event. This is the RemoteAddr from the
 * standard http request.
 * @member {string} [host] The externally accessible hostname of the registry
 * instance, as specified by the http host header on incoming requests.
 * @member {string} [method] The request method that generated the event.
 * @member {string} [useragent] The user agent header of the request.
 */
export interface Request {
  id?: string;
  addr?: string;
  host?: string;
  method?: string;
  useragent?: string;
}

/**
 * @class
 * Initializes a new instance of the Actor class.
 * @constructor
 * The agent that initiated the event. For most situations, this could be from
 * the authorization context of the request.
 *
 * @member {string} [name] The subject or username associated with the request
 * context that generated the event.
 */
export interface Actor {
  name?: string;
}

/**
 * @class
 * Initializes a new instance of the Source class.
 * @constructor
 * The registry node that generated the event. Put differently, while the actor
 * initiates the event, the source generates it.
 *
 * @member {string} [addr] The IP or hostname and the port of the registry node
 * that generated the event. Generally, this will be resolved by os.Hostname()
 * along with the running port.
 * @member {string} [instanceID] The running instance of an application.
 * Changes after each restart.
 */
export interface Source {
  addr?: string;
  instanceID?: string;
}

/**
 * @class
 * Initializes a new instance of the EventContent class.
 * @constructor
 * The content of the event request message.
 *
 * @member {string} [id] The event ID.
 * @member {date} [timestamp] The time at which the event occurred.
 * @member {string} [action] The action that encompasses the provided event.
 * @member {object} [target] The target of the event.
 * @member {string} [target.mediaType] The MIME type of the referenced object.
 * @member {number} [target.size] The number of bytes of the content. Same as
 * Length field.
 * @member {string} [target.digest] The digest of the content, as defined by
 * the Registry V2 HTTP API Specification.
 * @member {number} [target.length] The number of bytes of the content. Same as
 * Size field.
 * @member {string} [target.repository] The repository name.
 * @member {string} [target.url] The direct URL to the content.
 * @member {string} [target.tag] The tag name.
 * @member {object} [request] The request that generated the event.
 * @member {string} [request.id] The ID of the request that initiated the
 * event.
 * @member {string} [request.addr] The IP or hostname and possibly port of the
 * client connection that initiated the event. This is the RemoteAddr from the
 * standard http request.
 * @member {string} [request.host] The externally accessible hostname of the
 * registry instance, as specified by the http host header on incoming
 * requests.
 * @member {string} [request.method] The request method that generated the
 * event.
 * @member {string} [request.useragent] The user agent header of the request.
 * @member {object} [actor] The agent that initiated the event. For most
 * situations, this could be from the authorization context of the request.
 * @member {string} [actor.name] The subject or username associated with the
 * request context that generated the event.
 * @member {object} [source] The registry node that generated the event. Put
 * differently, while the actor initiates the event, the source generates it.
 * @member {string} [source.addr] The IP or hostname and the port of the
 * registry node that generated the event. Generally, this will be resolved by
 * os.Hostname() along with the running port.
 * @member {string} [source.instanceID] The running instance of an application.
 * Changes after each restart.
 */
export interface EventContent {
  id?: string;
  timestamp?: Date;
  action?: string;
  target?: Target;
  request?: Request;
  actor?: Actor;
  source?: Source;
}

/**
 * @class
 * Initializes a new instance of the EventRequestMessage class.
 * @constructor
 * The event request message sent to the service URI.
 *
 * @member {object} [content] The content of the event request message.
 * @member {string} [content.id] The event ID.
 * @member {date} [content.timestamp] The time at which the event occurred.
 * @member {string} [content.action] The action that encompasses the provided
 * event.
 * @member {object} [content.target] The target of the event.
 * @member {string} [content.target.mediaType] The MIME type of the referenced
 * object.
 * @member {number} [content.target.size] The number of bytes of the content.
 * Same as Length field.
 * @member {string} [content.target.digest] The digest of the content, as
 * defined by the Registry V2 HTTP API Specification.
 * @member {number} [content.target.length] The number of bytes of the content.
 * Same as Size field.
 * @member {string} [content.target.repository] The repository name.
 * @member {string} [content.target.url] The direct URL to the content.
 * @member {string} [content.target.tag] The tag name.
 * @member {object} [content.request] The request that generated the event.
 * @member {string} [content.request.id] The ID of the request that initiated
 * the event.
 * @member {string} [content.request.addr] The IP or hostname and possibly port
 * of the client connection that initiated the event. This is the RemoteAddr
 * from the standard http request.
 * @member {string} [content.request.host] The externally accessible hostname
 * of the registry instance, as specified by the http host header on incoming
 * requests.
 * @member {string} [content.request.method] The request method that generated
 * the event.
 * @member {string} [content.request.useragent] The user agent header of the
 * request.
 * @member {object} [content.actor] The agent that initiated the event. For
 * most situations, this could be from the authorization context of the
 * request.
 * @member {string} [content.actor.name] The subject or username associated
 * with the request context that generated the event.
 * @member {object} [content.source] The registry node that generated the
 * event. Put differently, while the actor initiates the event, the source
 * generates it.
 * @member {string} [content.source.addr] The IP or hostname and the port of
 * the registry node that generated the event. Generally, this will be resolved
 * by os.Hostname() along with the running port.
 * @member {string} [content.source.instanceID] The running instance of an
 * application. Changes after each restart.
 * @member {object} [headers] The headers of the event request message.
 * @member {string} [method] The HTTP method used to send the event request
 * message.
 * @member {string} [requestUri] The URI used to send the event request
 * message.
 * @member {string} [version] The HTTP message version.
 */
export interface EventRequestMessage {
  content?: EventContent;
  headers?: { [propertyName: string]: string };
  method?: string;
  requestUri?: string;
  version?: string;
}

/**
 * @class
 * Initializes a new instance of the EventResponseMessage class.
 * @constructor
 * The event response message received from the service URI.
 *
 * @member {string} [content] The content of the event response message.
 * @member {object} [headers] The headers of the event response message.
 * @member {string} [reasonPhrase] The reason phrase of the event response
 * message.
 * @member {string} [statusCode] The status code of the event response message.
 * @member {string} [version] The HTTP message version.
 */
export interface EventResponseMessage {
  content?: string;
  headers?: { [propertyName: string]: string };
  reasonPhrase?: string;
  statusCode?: string;
  version?: string;
}

/**
 * @class
 * Initializes a new instance of the Event class.
 * @constructor
 * The event for a webhook.
 *
 * @member {object} [eventRequestMessage] The event request message sent to the
 * service URI.
 * @member {object} [eventRequestMessage.content] The content of the event
 * request message.
 * @member {string} [eventRequestMessage.content.id] The event ID.
 * @member {date} [eventRequestMessage.content.timestamp] The time at which the
 * event occurred.
 * @member {string} [eventRequestMessage.content.action] The action that
 * encompasses the provided event.
 * @member {object} [eventRequestMessage.content.target] The target of the
 * event.
 * @member {string} [eventRequestMessage.content.target.mediaType] The MIME
 * type of the referenced object.
 * @member {number} [eventRequestMessage.content.target.size] The number of
 * bytes of the content. Same as Length field.
 * @member {string} [eventRequestMessage.content.target.digest] The digest of
 * the content, as defined by the Registry V2 HTTP API Specification.
 * @member {number} [eventRequestMessage.content.target.length] The number of
 * bytes of the content. Same as Size field.
 * @member {string} [eventRequestMessage.content.target.repository] The
 * repository name.
 * @member {string} [eventRequestMessage.content.target.url] The direct URL to
 * the content.
 * @member {string} [eventRequestMessage.content.target.tag] The tag name.
 * @member {object} [eventRequestMessage.content.request] The request that
 * generated the event.
 * @member {string} [eventRequestMessage.content.request.id] The ID of the
 * request that initiated the event.
 * @member {string} [eventRequestMessage.content.request.addr] The IP or
 * hostname and possibly port of the client connection that initiated the
 * event. This is the RemoteAddr from the standard http request.
 * @member {string} [eventRequestMessage.content.request.host] The externally
 * accessible hostname of the registry instance, as specified by the http host
 * header on incoming requests.
 * @member {string} [eventRequestMessage.content.request.method] The request
 * method that generated the event.
 * @member {string} [eventRequestMessage.content.request.useragent] The user
 * agent header of the request.
 * @member {object} [eventRequestMessage.content.actor] The agent that
 * initiated the event. For most situations, this could be from the
 * authorization context of the request.
 * @member {string} [eventRequestMessage.content.actor.name] The subject or
 * username associated with the request context that generated the event.
 * @member {object} [eventRequestMessage.content.source] The registry node that
 * generated the event. Put differently, while the actor initiates the event,
 * the source generates it.
 * @member {string} [eventRequestMessage.content.source.addr] The IP or
 * hostname and the port of the registry node that generated the event.
 * Generally, this will be resolved by os.Hostname() along with the running
 * port.
 * @member {string} [eventRequestMessage.content.source.instanceID] The running
 * instance of an application. Changes after each restart.
 * @member {object} [eventRequestMessage.headers] The headers of the event
 * request message.
 * @member {string} [eventRequestMessage.method] The HTTP method used to send
 * the event request message.
 * @member {string} [eventRequestMessage.requestUri] The URI used to send the
 * event request message.
 * @member {string} [eventRequestMessage.version] The HTTP message version.
 * @member {object} [eventResponseMessage] The event response message received
 * from the service URI.
 * @member {string} [eventResponseMessage.content] The content of the event
 * response message.
 * @member {object} [eventResponseMessage.headers] The headers of the event
 * response message.
 * @member {string} [eventResponseMessage.reasonPhrase] The reason phrase of
 * the event response message.
 * @member {string} [eventResponseMessage.statusCode] The status code of the
 * event response message.
 * @member {string} [eventResponseMessage.version] The HTTP message version.
 */
export interface Event extends EventInfo {
  eventRequestMessage?: EventRequestMessage;
  eventResponseMessage?: EventResponseMessage;
}


/**
 * @class
 * Initializes a new instance of the RegistryListResult class.
 * @constructor
 * The result of a request to list container registries.
 *
 * @member {string} [nextLink] The URI that can be used to request the next
 * list of container registries.
 */
export interface RegistryListResult extends Array<Registry> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * The result of a request to list container registry operations.
 *
 * @member {string} [nextLink] The URI that can be used to request the next
 * list of container registry operations.
 */
export interface OperationListResult extends Array<OperationDefinition> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ReplicationListResult class.
 * @constructor
 * The result of a request to list replications for a container registry.
 *
 * @member {string} [nextLink] The URI that can be used to request the next
 * list of replications.
 */
export interface ReplicationListResult extends Array<Replication> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the WebhookListResult class.
 * @constructor
 * The result of a request to list webhooks for a container registry.
 *
 * @member {string} [nextLink] The URI that can be used to request the next
 * list of webhooks.
 */
export interface WebhookListResult extends Array<Webhook> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the EventListResult class.
 * @constructor
 * The result of a request to list events for a webhook.
 *
 * @member {string} [nextLink] The URI that can be used to request the next
 * list of events.
 */
export interface EventListResult extends Array<Event> {
  nextLink?: string;
}
