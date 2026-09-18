//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpdateInterestCategoryListsRequestType } from "../../types/UpdateInterestCategoryListsRequestType.js";

export const UpdateInterestCategoryListsRequest: core.serialization.Schema<
    serializers.UpdateInterestCategoryListsRequest.Raw,
    Omit<Mailchimp.UpdateInterestCategoryListsRequest, "listId" | "interestCategoryId">
> = core.serialization.object({
    displayOrder: core.serialization.property("display_order", core.serialization.number().optional()),
    title: core.serialization.string().optional(),
    type: UpdateInterestCategoryListsRequestType.optional(),
});

export declare namespace UpdateInterestCategoryListsRequest {
    export interface Raw {
        display_order?: number | null;
        title?: string | null;
        type?: UpdateInterestCategoryListsRequestType.Raw | null;
    }
}
