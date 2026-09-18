//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignReportTimeseriesItem: core.serialization.ObjectSchema<
    serializers.CampaignReportTimeseriesItem.Raw,
    Mailchimp.CampaignReportTimeseriesItem
> = core.serialization.object({
    emailsSent: core.serialization.property("emails_sent", core.serialization.number().optional()),
    proxyExcludedUniqueOpens: core.serialization.property(
        "proxy_excluded_unique_opens",
        core.serialization.number().optional(),
    ),
    recipientsClicks: core.serialization.property("recipients_clicks", core.serialization.number().optional()),
    timestamp: core.serialization.date().optional(),
    uniqueOpens: core.serialization.property("unique_opens", core.serialization.number().optional()),
});

export declare namespace CampaignReportTimeseriesItem {
    export interface Raw {
        emails_sent?: number | null;
        proxy_excluded_unique_opens?: number | null;
        recipients_clicks?: number | null;
        timestamp?: string | null;
        unique_opens?: number | null;
    }
}
