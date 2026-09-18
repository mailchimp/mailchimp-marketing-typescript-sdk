//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ClickDetailReportAbSplitA: core.serialization.ObjectSchema<
    serializers.ClickDetailReportAbSplitA.Raw,
    Mailchimp.ClickDetailReportAbSplitA
> = core.serialization.object({
    clickPercentageA: core.serialization.property("click_percentage_a", core.serialization.number().optional()),
    totalClicksA: core.serialization.property("total_clicks_a", core.serialization.number().optional()),
    uniqueClickPercentageA: core.serialization.property(
        "unique_click_percentage_a",
        core.serialization.number().optional(),
    ),
    uniqueClicksA: core.serialization.property("unique_clicks_a", core.serialization.number().optional()),
});

export declare namespace ClickDetailReportAbSplitA {
    export interface Raw {
        click_percentage_a?: number | null;
        total_clicks_a?: number | null;
        unique_click_percentage_a?: number | null;
        unique_clicks_a?: number | null;
    }
}
