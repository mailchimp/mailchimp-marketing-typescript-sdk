//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListRootResponseIndustryStats: core.serialization.ObjectSchema<
    serializers.ListRootResponseIndustryStats.Raw,
    Mailchimp.ListRootResponseIndustryStats
> = core.serialization.object({
    bounceRate: core.serialization.property("bounce_rate", core.serialization.number().optional()),
    clickRate: core.serialization.property("click_rate", core.serialization.number().optional()),
    openRate: core.serialization.property("open_rate", core.serialization.number().optional()),
});

export declare namespace ListRootResponseIndustryStats {
    export interface Raw {
        bounce_rate?: number | null;
        click_rate?: number | null;
        open_rate?: number | null;
    }
}
