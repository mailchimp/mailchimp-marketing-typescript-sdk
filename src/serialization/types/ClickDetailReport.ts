//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ClickDetailReportAbSplit } from "./ClickDetailReportAbSplit.js";
import { ClickDetailReportLinksItem } from "./ClickDetailReportLinksItem.js";

export const ClickDetailReport: core.serialization.ObjectSchema<
    serializers.ClickDetailReport.Raw,
    Mailchimp.ClickDetailReport
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ClickDetailReportLinksItem).optional()),
    abSplit: core.serialization.property("ab_split", ClickDetailReportAbSplit.optional()),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    clickPercentage: core.serialization.property("click_percentage", core.serialization.number().optional()),
    id: core.serialization.string().optional(),
    lastClick: core.serialization.property("last_click", core.serialization.date().optional()),
    totalClicks: core.serialization.property("total_clicks", core.serialization.number().optional()),
    uniqueClickPercentage: core.serialization.property(
        "unique_click_percentage",
        core.serialization.number().optional(),
    ),
    uniqueClicks: core.serialization.property("unique_clicks", core.serialization.number().optional()),
    url: core.serialization.string().optional(),
});

export declare namespace ClickDetailReport {
    export interface Raw {
        _links?: ClickDetailReportLinksItem.Raw[] | null;
        ab_split?: ClickDetailReportAbSplit.Raw | null;
        campaign_id?: string | null;
        click_percentage?: number | null;
        id?: string | null;
        last_click?: string | null;
        total_clicks?: number | null;
        unique_click_percentage?: number | null;
        unique_clicks?: number | null;
        url?: string | null;
    }
}
