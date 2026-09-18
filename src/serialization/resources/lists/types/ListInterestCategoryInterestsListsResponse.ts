//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { Interest } from "../../../types/Interest.js";
import { ListInterestCategoryInterestsListsResponseLinksItem } from "./ListInterestCategoryInterestsListsResponseLinksItem.js";

export const ListInterestCategoryInterestsListsResponse: core.serialization.ObjectSchema<
    serializers.ListInterestCategoryInterestsListsResponse.Raw,
    Mailchimp.ListInterestCategoryInterestsListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListInterestCategoryInterestsListsResponseLinksItem).optional(),
    ),
    categoryId: core.serialization.property("category_id", core.serialization.string().optional()),
    interests: core.serialization.list(Interest).optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListInterestCategoryInterestsListsResponse {
    export interface Raw {
        _links?: ListInterestCategoryInterestsListsResponseLinksItem.Raw[] | null;
        category_id?: string | null;
        interests?: Interest.Raw[] | null;
        list_id?: string | null;
        total_items?: number | null;
    }
}
