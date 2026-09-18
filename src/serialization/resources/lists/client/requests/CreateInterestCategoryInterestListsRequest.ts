//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateInterestCategoryInterestListsRequest: core.serialization.Schema<
    serializers.CreateInterestCategoryInterestListsRequest.Raw,
    Omit<Mailchimp.CreateInterestCategoryInterestListsRequest, "listId" | "interestCategoryId">
> = core.serialization.object({
    displayOrder: core.serialization.property("display_order", core.serialization.number().optional()),
    name: core.serialization.string(),
});

export declare namespace CreateInterestCategoryInterestListsRequest {
    export interface Raw {
        display_order?: number | null;
        name: string;
    }
}
