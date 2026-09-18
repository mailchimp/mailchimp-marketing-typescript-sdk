//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignReportForwards: core.serialization.ObjectSchema<
    serializers.CampaignReportForwards.Raw,
    Mailchimp.CampaignReportForwards
> = core.serialization.object({
    forwardsCount: core.serialization.property("forwards_count", core.serialization.number().optional()),
    forwardsOpens: core.serialization.property("forwards_opens", core.serialization.number().optional()),
});

export declare namespace CampaignReportForwards {
    export interface Raw {
        forwards_count?: number | null;
        forwards_opens?: number | null;
    }
}
