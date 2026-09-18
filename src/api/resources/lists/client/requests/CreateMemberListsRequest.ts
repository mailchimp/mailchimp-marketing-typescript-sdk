//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id",
 *         emailAddress: "email_address",
 *         status: "subscribed"
 *     }
 */
export interface CreateMemberListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false. */
    skipMergeValidation?: boolean;
    /** Email address for a subscriber. */
    emailAddress: string;
    /** Type of email this member asked to get ('html' or 'text'). */
    emailType?: string;
    /** The key of this object's properties is the ID of the interest in question. */
    interests?: Record<string, boolean>;
    /** The IP address the subscriber used to confirm their opt-in status. */
    ipOpt?: string;
    /** IP address the subscriber signed up from. */
    ipSignup?: string;
    /** If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/). */
    language?: string;
    /** Subscriber location information. */
    location?: Mailchimp.CreateMemberListsRequestLocation;
    /** The marketing permissions for the subscriber. */
    marketingPermissions?: Mailchimp.CreateMemberListsRequestMarketingPermissionsItem[];
    /** A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure. */
    mergeFields?: Record<string, Mailchimp.CreateMemberListsRequestMergeFieldsValue>;
    /** Subscriber's current status. */
    status: Mailchimp.CreateMemberListsRequestStatus;
    /** The tags that are associated with a member. */
    tags?: string[];
    timestampOpt?: Mailchimp.CreateMemberListsRequestTimestampOpt;
    timestampSignup?: Mailchimp.CreateMemberListsRequestTimestampSignup;
    /** [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber. */
    vip?: boolean;
}
