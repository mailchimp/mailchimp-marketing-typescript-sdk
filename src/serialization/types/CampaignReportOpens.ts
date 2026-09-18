//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignReportOpens: core.serialization.ObjectSchema<
    serializers.CampaignReportOpens.Raw,
    Mailchimp.CampaignReportOpens
> = core.serialization.object({
    lastOpen: core.serialization.property("last_open", core.serialization.date().optional()),
    openRate: core.serialization.property("open_rate", core.serialization.number().optional()),
    opensTotal: core.serialization.property("opens_total", core.serialization.number().optional()),
    proxyExcludedOpenRate: core.serialization.property(
        "proxy_excluded_open_rate",
        core.serialization.number().optional(),
    ),
    proxyExcludedOpens: core.serialization.property("proxy_excluded_opens", core.serialization.number().optional()),
    proxyExcludedUniqueOpens: core.serialization.property(
        "proxy_excluded_unique_opens",
        core.serialization.number().optional(),
    ),
    uniqueOpens: core.serialization.property("unique_opens", core.serialization.number().optional()),
});

export declare namespace CampaignReportOpens {
    export interface Raw {
        last_open?: string | null;
        open_rate?: number | null;
        opens_total?: number | null;
        proxy_excluded_open_rate?: number | null;
        proxy_excluded_opens?: number | null;
        proxy_excluded_unique_opens?: number | null;
        unique_opens?: number | null;
    }
}
