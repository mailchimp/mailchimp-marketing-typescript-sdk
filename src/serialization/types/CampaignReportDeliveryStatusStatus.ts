//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignReportDeliveryStatusStatus: core.serialization.Schema<
    serializers.CampaignReportDeliveryStatusStatus.Raw,
    Mailchimp.CampaignReportDeliveryStatusStatus
> = core.serialization.enum_(["delivering", "delivered", "canceling", "canceled"]);

export declare namespace CampaignReportDeliveryStatusStatus {
    export type Raw = "delivering" | "delivered" | "canceling" | "canceled";
}
