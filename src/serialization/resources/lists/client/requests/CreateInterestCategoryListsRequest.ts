//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateInterestCategoryListsRequestType } from "../../types/CreateInterestCategoryListsRequestType.js";

export const CreateInterestCategoryListsRequest: core.serialization.Schema<
    serializers.CreateInterestCategoryListsRequest.Raw,
    Omit<Mailchimp.CreateInterestCategoryListsRequest, "listId">
> = core.serialization.object({
    displayOrder: core.serialization.property("display_order", core.serialization.number().optional()),
    title: core.serialization.string(),
    type: CreateInterestCategoryListsRequestType,
});

export declare namespace CreateInterestCategoryListsRequest {
    export interface Raw {
        display_order?: number | null;
        title: string;
        type: CreateInterestCategoryListsRequestType.Raw;
    }
}
