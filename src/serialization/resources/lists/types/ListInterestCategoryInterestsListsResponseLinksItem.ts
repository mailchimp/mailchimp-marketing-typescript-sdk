//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListInterestCategoryInterestsListsResponseLinksItemMethod } from "./ListInterestCategoryInterestsListsResponseLinksItemMethod.js";

export const ListInterestCategoryInterestsListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListInterestCategoryInterestsListsResponseLinksItem.Raw,
    Mailchimp.ListInterestCategoryInterestsListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListInterestCategoryInterestsListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListInterestCategoryInterestsListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListInterestCategoryInterestsListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
