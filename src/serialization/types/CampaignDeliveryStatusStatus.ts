//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignDeliveryStatusStatus: core.serialization.Schema<
    serializers.CampaignDeliveryStatusStatus.Raw,
    Mailchimp.CampaignDeliveryStatusStatus
> = core.serialization.enum_(["delivering", "delivered", "canceling", "canceled"]);

export declare namespace CampaignDeliveryStatusStatus {
    export type Raw = "delivering" | "delivered" | "canceling" | "canceled";
}
