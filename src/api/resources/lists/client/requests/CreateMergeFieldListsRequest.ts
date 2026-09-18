//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id",
 *         name: "name",
 *         type: "text"
 *     }
 */
export interface CreateMergeFieldListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The default value for the merge field if `null`. */
    defaultValue?: string;
    /** The order that the merge field displays on the list signup form. */
    displayOrder?: number;
    /** Extra text to help the subscriber fill out the form. */
    helpText?: string;
    /** The name of the merge field (audience field). */
    name: string;
    /** Extra options for some merge field types. */
    options?: Mailchimp.CreateMergeFieldListsRequestOptions;
    /** Whether the merge field is displayed on the signup form. */
    public?: boolean;
    /** Whether the merge field is required to import a contact. */
    required?: boolean;
    /** The merge tag used for Mailchimp campaigns and [adding contact information](https://mailchimp.com/developer/marketing/docs/merge-fields/#add-merge-data-to-contacts). */
    tag?: string;
    /** The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field. */
    type: Mailchimp.CreateMergeFieldListsRequestType;
}
