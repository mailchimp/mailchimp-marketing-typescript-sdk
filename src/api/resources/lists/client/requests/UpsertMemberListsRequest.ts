//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         listId: "list_id",
 *         subscriberHash: "subscriber_hash",
 *         emailAddress: "email_address"
 *     }
 */
export interface UpsertMemberListsRequest {
    /** The unique ID for the list. */
    listId: string;
    /** The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts a list member's email address or contact_id. */
    subscriberHash: string;
    /** If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false. */
    skipMergeValidation?: boolean;
    /** Email address for a subscriber. This value is required only if the email address is not already present on the list. */
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
    location?: Mailchimp.UpsertMemberListsRequestLocation;
    /** The marketing permissions for the subscriber. */
    marketingPermissions?: Mailchimp.UpsertMemberListsRequestMarketingPermissionsItem[];
    /** A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure. */
    mergeFields?: Record<string, Mailchimp.UpsertMemberListsRequestMergeFieldsValue>;
    /** Subscriber's current status. */
    status?: Mailchimp.UpsertMemberListsRequestStatus;
    /** Subscriber's status. This value is required only if the email address is not already present on the list. */
    statusIfNew?: Mailchimp.UpsertMemberListsRequestStatusIfNew;
    /** The tags that are associated with a member. */
    tags?: string[];
    timestampOpt?: Mailchimp.UpsertMemberListsRequestTimestampOpt;
    timestampSignup?: Mailchimp.UpsertMemberListsRequestTimestampSignup;
    /** [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber. */
    vip?: boolean;
}
