//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignReportClicks: core.serialization.ObjectSchema<
    serializers.CampaignReportClicks.Raw,
    Mailchimp.CampaignReportClicks
> = core.serialization.object({
    clickRate: core.serialization.property("click_rate", core.serialization.number().optional()),
    clicksTotal: core.serialization.property("clicks_total", core.serialization.number().optional()),
    lastClick: core.serialization.property("last_click", core.serialization.date().optional()),
    uniqueClicks: core.serialization.property("unique_clicks", core.serialization.number().optional()),
    uniqueSubscriberClicks: core.serialization.property(
        "unique_subscriber_clicks",
        core.serialization.number().optional(),
    ),
});

export declare namespace CampaignReportClicks {
    export interface Raw {
        click_rate?: number | null;
        clicks_total?: number | null;
        last_click?: string | null;
        unique_clicks?: number | null;
        unique_subscriber_clicks?: number | null;
    }
}
