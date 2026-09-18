//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ClickDetailReportAbSplitB: core.serialization.ObjectSchema<
    serializers.ClickDetailReportAbSplitB.Raw,
    Mailchimp.ClickDetailReportAbSplitB
> = core.serialization.object({
    clickPercentageB: core.serialization.property("click_percentage_b", core.serialization.number().optional()),
    totalClicksB: core.serialization.property("total_clicks_b", core.serialization.number().optional()),
    uniqueClickPercentageB: core.serialization.property(
        "unique_click_percentage_b",
        core.serialization.number().optional(),
    ),
    uniqueClicksB: core.serialization.property("unique_clicks_b", core.serialization.number().optional()),
});

export declare namespace ClickDetailReportAbSplitB {
    export interface Raw {
        click_percentage_b?: number | null;
        total_clicks_b?: number | null;
        unique_click_percentage_b?: number | null;
        unique_clicks_b?: number | null;
    }
}
