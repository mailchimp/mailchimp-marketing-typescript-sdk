//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignsDeliveryStatusStatus: core.serialization.Schema<
    serializers.CampaignsDeliveryStatusStatus.Raw,
    Mailchimp.CampaignsDeliveryStatusStatus
> = core.serialization.enum_(["delivering", "delivered", "canceling", "canceled"]);

export declare namespace CampaignsDeliveryStatusStatus {
    export type Raw = "delivering" | "delivered" | "canceling" | "canceled";
}
