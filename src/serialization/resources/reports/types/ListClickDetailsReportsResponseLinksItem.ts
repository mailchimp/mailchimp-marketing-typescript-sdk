//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListClickDetailsReportsResponseLinksItemMethod } from "./ListClickDetailsReportsResponseLinksItemMethod.js";

export const ListClickDetailsReportsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListClickDetailsReportsResponseLinksItem.Raw,
    Mailchimp.ListClickDetailsReportsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListClickDetailsReportsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListClickDetailsReportsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListClickDetailsReportsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
