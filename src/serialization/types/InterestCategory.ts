//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { InterestCategoryLinksItem } from "./InterestCategoryLinksItem.js";
import { InterestCategoryType } from "./InterestCategoryType.js";

export const InterestCategory: core.serialization.ObjectSchema<
    serializers.InterestCategory.Raw,
    Mailchimp.InterestCategory
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(InterestCategoryLinksItem).optional()),
    displayOrder: core.serialization.property("display_order", core.serialization.number().optional()),
    id: core.serialization.string().optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    title: core.serialization.string().optional(),
    type: InterestCategoryType.optional(),
});

export declare namespace InterestCategory {
    export interface Raw {
        _links?: InterestCategoryLinksItem.Raw[] | null;
        display_order?: number | null;
        id?: string | null;
        list_id?: string | null;
        title?: string | null;
        type?: InterestCategoryType.Raw | null;
    }
}
