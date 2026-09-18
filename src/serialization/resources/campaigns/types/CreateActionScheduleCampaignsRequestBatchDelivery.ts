//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateActionScheduleCampaignsRequestBatchDelivery: core.serialization.ObjectSchema<
    serializers.CreateActionScheduleCampaignsRequestBatchDelivery.Raw,
    Mailchimp.CreateActionScheduleCampaignsRequestBatchDelivery
> = core.serialization.object({
    batchCount: core.serialization.property("batch_count", core.serialization.number()),
    batchDelay: core.serialization.property("batch_delay", core.serialization.number()),
});

export declare namespace CreateActionScheduleCampaignsRequestBatchDelivery {
    export interface Raw {
        batch_count: number;
        batch_delay: number;
    }
}
