//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateActionScheduleCampaignsRequestBatchDelivery } from "../../types/CreateActionScheduleCampaignsRequestBatchDelivery.js";

export const CreateActionScheduleCampaignsRequest: core.serialization.Schema<
    serializers.CreateActionScheduleCampaignsRequest.Raw,
    Omit<Mailchimp.CreateActionScheduleCampaignsRequest, "campaignId">
> = core.serialization.object({
    batchDelivery: core.serialization.property(
        "batch_delivery",
        CreateActionScheduleCampaignsRequestBatchDelivery.optional(),
    ),
    scheduleTime: core.serialization.property("schedule_time", core.serialization.date()),
    timewarp: core.serialization.boolean().optional(),
});

export declare namespace CreateActionScheduleCampaignsRequest {
    export interface Raw {
        batch_delivery?: CreateActionScheduleCampaignsRequestBatchDelivery.Raw | null;
        schedule_time: string;
        timewarp?: boolean | null;
    }
}
