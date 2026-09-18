//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface ListCampaignsRequest {
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
    /** The number of records to return. Default value is 10. Maximum value is 1000 */
    count?: number;
    /** Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this is the number of records from a collection to skip. Default value is 0. */
    offset?: number;
    /** The campaign type. */
    type?: Mailchimp.ListCampaignsRequestType;
    /** The status of the campaign. */
    status?: Mailchimp.ListCampaignsRequestStatus;
    /** Restrict the response to campaigns sent before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    beforeSendTime?: Date;
    /** Restrict the response to campaigns sent after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    sinceSendTime?: Date;
    /** Restrict the response to campaigns created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    beforeCreateTime?: Date;
    /** Restrict the response to campaigns created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00. */
    sinceCreateTime?: Date;
    /** The unique id for the list. */
    listId?: string;
    /** The unique folder id. */
    folderId?: string;
    /** Retrieve campaigns sent to a particular list member. Member ID is The MD5 hash of the lowercase version of the list member’s email address. */
    memberId?: string;
    /** Returns files sorted by the specified field. */
    sortField?: Mailchimp.ListCampaignsRequestSortField;
    /** Determines the order direction for sorted results. */
    sortDir?: Mailchimp.ListCampaignsRequestSortDir;
    /** Return the `resend_shortcut_eligibility` field in the response, which tells you if the campaign is eligible for the various Campaign Resend Shortcuts offered. */
    includeResendShortcutEligibility?: boolean;
    /** Return the `resend_shortcut_usage` field in the response.  This includes information about campaigns related by a shortcut. */
    includeResendShortcutUsage?: boolean;
}
