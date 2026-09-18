//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListGrowthHistoryListsRequestSortField: core.serialization.Schema<
    serializers.ListGrowthHistoryListsRequestSortField.Raw,
    Mailchimp.ListGrowthHistoryListsRequestSortField
> = core.serialization.enum_(["month"]);

export declare namespace ListGrowthHistoryListsRequestSortField {
    export type Raw = "month";
}
