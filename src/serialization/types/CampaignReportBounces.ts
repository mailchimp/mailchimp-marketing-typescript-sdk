//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignReportBounces: core.serialization.ObjectSchema<
    serializers.CampaignReportBounces.Raw,
    Mailchimp.CampaignReportBounces
> = core.serialization.object({
    hardBounces: core.serialization.property("hard_bounces", core.serialization.number().optional()),
    softBounces: core.serialization.property("soft_bounces", core.serialization.number().optional()),
    syntaxErrors: core.serialization.property("syntax_errors", core.serialization.number().optional()),
});

export declare namespace CampaignReportBounces {
    export interface Raw {
        hard_bounces?: number | null;
        soft_bounces?: number | null;
        syntax_errors?: number | null;
    }
}
