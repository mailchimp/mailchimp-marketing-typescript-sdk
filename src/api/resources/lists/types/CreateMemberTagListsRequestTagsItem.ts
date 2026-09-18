//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * Add or remove tags on a member by declaring a tag either active or inactive on a member.
 */
export interface CreateMemberTagListsRequestTagsItem {
    /** The name of the tag. */
    name: string;
    /** The status for the tag on the member, pass in active to add a tag or inactive to remove it. */
    status: Mailchimp.CreateMemberTagListsRequestTagsItemStatus;
}
