//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         campaignId: "campaign_id",
 *         scheduleTime: new Date("2024-01-15T09:30:00.000Z")
 *     }
 */
export interface CreateActionScheduleCampaignsRequest {
    /** The unique id for the campaign. */
    campaignId: string;
    /** Choose whether the campaign should use [Batch Delivery](https://mailchimp.com/help/schedule-batch-delivery/). Cannot be set to `true` for campaigns using [Timewarp](https://mailchimp.com/help/use-timewarp/). */
    batchDelivery?: Mailchimp.CreateActionScheduleCampaignsRequestBatchDelivery;
    /** The UTC date and time to schedule the campaign for delivery in ISO 8601 format. Campaigns may only be scheduled to send on the quarter-hour (:00, :15, :30, :45). */
    scheduleTime: Date;
    /** Choose whether the campaign should use [Timewarp](https://mailchimp.com/help/use-timewarp/) when sending. Campaigns scheduled with Timewarp are localized based on the recipients' time zones. For example, a Timewarp campaign with a `schedule_time` of 13:00 will be sent to each recipient at 1:00pm in their local time. Cannot be set to `true` for campaigns using [Batch Delivery](https://mailchimp.com/help/schedule-batch-delivery/). */
    timewarp?: boolean;
}
