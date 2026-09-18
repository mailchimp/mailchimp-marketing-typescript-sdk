//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignReportListStats: core.serialization.ObjectSchema<
    serializers.CampaignReportListStats.Raw,
    Mailchimp.CampaignReportListStats
> = core.serialization.object({
    clickRate: core.serialization.property("click_rate", core.serialization.number().optional()),
    openRate: core.serialization.property("open_rate", core.serialization.number().optional()),
    proxyExcludedOpenRate: core.serialization.property(
        "proxy_excluded_open_rate",
        core.serialization.number().optional(),
    ),
    subRate: core.serialization.property("sub_rate", core.serialization.number().optional()),
    unsubRate: core.serialization.property("unsub_rate", core.serialization.number().optional()),
});

export declare namespace CampaignReportListStats {
    export interface Raw {
        click_rate?: number | null;
        open_rate?: number | null;
        proxy_excluded_open_rate?: number | null;
        sub_rate?: number | null;
        unsub_rate?: number | null;
    }
}
