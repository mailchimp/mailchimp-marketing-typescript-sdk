//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         audienceId: "audience_id",
 *         contactId: "contact_id"
 *     }
 */
export interface PatchAudienceContactRequest {
    /** The unique ID for the audience. */
    audienceId: string;
    /** The unique id for the contact. */
    contactId: string;
    /** Defines how merge field validation is handled. When set to `ignore_required_checks`, the API does not raise an error if required merge fields are missing from the request. When set to `strict`, the API enforces validation and returns an error if any required merge field is not provided. If this setting is omitted, `strict` is applied by default. */
    mergeFieldValidationMode?: Mailchimp.PatchAudienceContactRequestMergeFieldValidationMode;
    /** Indicates the data processing mode. In `historical` mode, contact data changes do not trigger automations or webhooks. In `live mode`, such changes do trigger them. */
    dataMode?: Mailchimp.PatchAudienceContactRequestDataMode;
    emailChannel?: Mailchimp.PatchAudienceContactRequestEmailChannel;
    /** The contact's detected language. */
    language?: string;
    /** A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure. */
    mergeFields?: Record<string, Mailchimp.PatchAudienceContactRequestMergeFieldsValue>;
    smsChannel?: Mailchimp.PatchAudienceContactRequestSmsChannel;
    /** An array of tags to add to the contact. Accepts tag name strings or objects with name and status. This operation is append-only; existing tags will be preserved, and only new tags from this array will be added. */
    tags?: Mailchimp.PatchAudienceContactRequestTagsItem[];
}
