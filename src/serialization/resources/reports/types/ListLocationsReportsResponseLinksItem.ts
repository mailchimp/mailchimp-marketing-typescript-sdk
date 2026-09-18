//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListLocationsReportsResponseLinksItemMethod } from "./ListLocationsReportsResponseLinksItemMethod.js";

export const ListLocationsReportsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListLocationsReportsResponseLinksItem.Raw,
    Mailchimp.ListLocationsReportsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListLocationsReportsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListLocationsReportsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListLocationsReportsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
