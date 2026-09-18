//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListInterestCategoriesListsResponseLinksItemMethod } from "./ListInterestCategoriesListsResponseLinksItemMethod.js";

export const ListInterestCategoriesListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListInterestCategoriesListsResponseLinksItem.Raw,
    Mailchimp.ListInterestCategoriesListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListInterestCategoriesListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListInterestCategoriesListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListInterestCategoriesListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
