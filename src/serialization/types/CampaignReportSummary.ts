//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { CampaignReportSummaryEcommerce } from "./CampaignReportSummaryEcommerce.js";

export const CampaignReportSummary: core.serialization.ObjectSchema<
    serializers.CampaignReportSummary.Raw,
    Mailchimp.CampaignReportSummary
> = core.serialization.object({
    clickRate: core.serialization.property("click_rate", core.serialization.number().optional()),
    clicks: core.serialization.number().optional(),
    ecommerce: CampaignReportSummaryEcommerce.optional(),
    openRate: core.serialization.property("open_rate", core.serialization.number().optional()),
    opens: core.serialization.number().optional(),
    subscriberClicks: core.serialization.property("subscriber_clicks", core.serialization.number().optional()),
    uniqueOpens: core.serialization.property("unique_opens", core.serialization.number().optional()),
});

export declare namespace CampaignReportSummary {
    export interface Raw {
        click_rate?: number | null;
        clicks?: number | null;
        ecommerce?: CampaignReportSummaryEcommerce.Raw | null;
        open_rate?: number | null;
        opens?: number | null;
        subscriber_clicks?: number | null;
        unique_opens?: number | null;
    }
}
