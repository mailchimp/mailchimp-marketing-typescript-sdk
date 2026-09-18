//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignDeliveryStatusStatus } from "./CampaignDeliveryStatusStatus.js";

export const CampaignDeliveryStatus: core.serialization.ObjectSchema<
    serializers.CampaignDeliveryStatus.Raw,
    Mailchimp.CampaignDeliveryStatus
> = core.serialization.object({
    canCancel: core.serialization.property("can_cancel", core.serialization.boolean().optional()),
    emailsCanceled: core.serialization.property("emails_canceled", core.serialization.number().optional()),
    emailsSent: core.serialization.property("emails_sent", core.serialization.number().optional()),
    enabled: core.serialization.boolean().optional(),
    status: CampaignDeliveryStatusStatus.optional(),
});

export declare namespace CampaignDeliveryStatus {
    export interface Raw {
        can_cancel?: boolean | null;
        emails_canceled?: number | null;
        emails_sent?: number | null;
        enabled?: boolean | null;
        status?: CampaignDeliveryStatusStatus.Raw | null;
    }
}
