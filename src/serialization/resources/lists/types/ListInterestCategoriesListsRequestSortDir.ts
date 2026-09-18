//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListInterestCategoriesListsRequestSortDir: core.serialization.Schema<
    serializers.ListInterestCategoriesListsRequestSortDir.Raw,
    Mailchimp.ListInterestCategoriesListsRequestSortDir
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ListInterestCategoriesListsRequestSortDir {
    export type Raw = "ASC" | "DESC";
}
