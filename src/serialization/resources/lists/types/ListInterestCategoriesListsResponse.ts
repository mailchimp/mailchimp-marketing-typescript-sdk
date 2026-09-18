//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { InterestCategory } from "../../../types/InterestCategory.js";
import { ListInterestCategoriesListsResponseLinksItem } from "./ListInterestCategoriesListsResponseLinksItem.js";

export const ListInterestCategoriesListsResponse: core.serialization.ObjectSchema<
    serializers.ListInterestCategoriesListsResponse.Raw,
    Mailchimp.ListInterestCategoriesListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListInterestCategoriesListsResponseLinksItem).optional(),
    ),
    categories: core.serialization.list(InterestCategory).optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListInterestCategoriesListsResponse {
    export interface Raw {
        _links?: ListInterestCategoriesListsResponseLinksItem.Raw[] | null;
        categories?: InterestCategory.Raw[] | null;
        list_id?: string | null;
        total_items?: number | null;
    }
}
