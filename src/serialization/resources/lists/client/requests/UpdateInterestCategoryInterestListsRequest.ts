//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const UpdateInterestCategoryInterestListsRequest: core.serialization.Schema<
    serializers.UpdateInterestCategoryInterestListsRequest.Raw,
    Omit<Mailchimp.UpdateInterestCategoryInterestListsRequest, "listId" | "interestCategoryId" | "interestId">
> = core.serialization.object({
    displayOrder: core.serialization.property("display_order", core.serialization.number().optional()),
    name: core.serialization.string().optional(),
});

export declare namespace UpdateInterestCategoryInterestListsRequest {
    export interface Raw {
        display_order?: number | null;
        name?: string | null;
    }
}
