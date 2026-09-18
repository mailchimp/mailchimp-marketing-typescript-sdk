//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListInterestCategoriesListsRequestSortField: core.serialization.Schema<
    serializers.ListInterestCategoriesListsRequestSortField.Raw,
    Mailchimp.ListInterestCategoriesListsRequestSortField
> = core.serialization.enum_(["name", "display_order"]);

export declare namespace ListInterestCategoriesListsRequestSortField {
    export type Raw = "name" | "display_order";
}
