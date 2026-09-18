//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         campaignId: "campaign_id",
 *         sendType: "html",
 *         testEmails: ["test_emails"]
 *     }
 */
export interface CreateActionTestCampaignsRequest {
    /** The unique id for the campaign. */
    campaignId: string;
    /** Choose the type of test email to send. */
    sendType: Mailchimp.CreateActionTestCampaignsRequestSendType;
    /** An array of email addresses to send the test email to. */
    testEmails: string[];
}
