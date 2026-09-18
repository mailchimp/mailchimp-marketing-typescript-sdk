//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A [merge field](https://mailchimp.com/developer/marketing/docs/merge-fields/) for an audience.
 */
export interface MergeField {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.MergeFieldLinksItem[];
    /** The default value for the merge field if `null`. */
    defaultValue?: string;
    /** The order that the merge field displays on the list signup form. */
    displayOrder?: number;
    /** Extra text to help the subscriber fill out the form. */
    helpText?: string;
    /** The ID that identifies this merge field's audience'. */
    listId?: string;
    /** The maximum number of merge fields this audience can hold. The limit is determined by the account's plan. Returned on POST responses only. Subtract `total_items` from this value to derive the remaining capacity. */
    mergeFieldLimit?: number;
    /** An unchanging id for the merge field. */
    mergeId?: number;
    /** The name of the merge field (audience field). */
    name?: string;
    /** Extra options for some merge field types. */
    options?: Mailchimp.MergeFieldOptions;
    /** Whether the merge field is displayed on the signup form. */
    public?: boolean;
    /** The boolean value if the merge field is required. */
    required?: boolean;
    /** The merge tag used for Mailchimp campaigns and [adding contact information](https://mailchimp.com/developer/marketing/docs/merge-fields/#add-merge-data-to-contacts). */
    tag?: string;
    /** The total number of merge fields on the audience after this field was created. Returned on POST responses only. */
    totalItems?: number;
    /** The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field. */
    type?: Mailchimp.MergeFieldType;
}
