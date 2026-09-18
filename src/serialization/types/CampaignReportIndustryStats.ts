//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignReportIndustryStats: core.serialization.ObjectSchema<
    serializers.CampaignReportIndustryStats.Raw,
    Mailchimp.CampaignReportIndustryStats
> = core.serialization.object({
    abuseRate: core.serialization.property("abuse_rate", core.serialization.number().optional()),
    bounceRate: core.serialization.property("bounce_rate", core.serialization.number().optional()),
    clickRate: core.serialization.property("click_rate", core.serialization.number().optional()),
    openRate: core.serialization.property("open_rate", core.serialization.number().optional()),
    type: core.serialization.string().optional(),
    unopenRate: core.serialization.property("unopen_rate", core.serialization.number().optional()),
    unsubRate: core.serialization.property("unsub_rate", core.serialization.number().optional()),
});

export declare namespace CampaignReportIndustryStats {
    export interface Raw {
        abuse_rate?: number | null;
        bounce_rate?: number | null;
        click_rate?: number | null;
        open_rate?: number | null;
        type?: string | null;
        unopen_rate?: number | null;
        unsub_rate?: number | null;
    }
}
