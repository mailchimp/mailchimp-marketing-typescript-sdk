//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListLocationsListsResponseLinksItemMethod } from "./ListLocationsListsResponseLinksItemMethod.js";

export const ListLocationsListsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListLocationsListsResponseLinksItem.Raw,
    Mailchimp.ListLocationsListsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListLocationsListsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListLocationsListsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListLocationsListsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
