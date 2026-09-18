//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignReportTimewarpItem: core.serialization.ObjectSchema<
    serializers.CampaignReportTimewarpItem.Raw,
    Mailchimp.CampaignReportTimewarpItem
> = core.serialization.object({
    bounces: core.serialization.number().optional(),
    clicks: core.serialization.number().optional(),
    gmtOffset: core.serialization.property("gmt_offset", core.serialization.number().optional()),
    lastClick: core.serialization.property("last_click", core.serialization.date().optional()),
    lastOpen: core.serialization.property("last_open", core.serialization.date().optional()),
    opens: core.serialization.number().optional(),
    uniqueClicks: core.serialization.property("unique_clicks", core.serialization.number().optional()),
    uniqueOpens: core.serialization.property("unique_opens", core.serialization.number().optional()),
});

export declare namespace CampaignReportTimewarpItem {
    export interface Raw {
        bounces?: number | null;
        clicks?: number | null;
        gmt_offset?: number | null;
        last_click?: string | null;
        last_open?: string | null;
        opens?: number | null;
        unique_clicks?: number | null;
        unique_opens?: number | null;
    }
}
