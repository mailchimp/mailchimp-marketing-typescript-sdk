//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Updates on campaigns in the process of sending.
 */
export interface CampaignReportDeliveryStatus {
    /** Whether a campaign send can be canceled. */
    canCancel?: boolean;
    /** The total number of emails canceled for this campaign. */
    emailsCanceled?: number;
    /** The total number of emails confirmed sent for this campaign so far. */
    emailsSent?: number;
    /** Whether Campaign Delivery Status is enabled for this account and campaign. */
    enabled?: boolean;
    /** The current state of a campaign delivery. */
    status?: Mailchimp.CampaignReportDeliveryStatusStatus;
}
