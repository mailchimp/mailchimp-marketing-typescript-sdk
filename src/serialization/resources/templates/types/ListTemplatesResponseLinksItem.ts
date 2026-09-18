//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListTemplatesResponseLinksItemMethod } from "./ListTemplatesResponseLinksItemMethod.js";

export const ListTemplatesResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListTemplatesResponseLinksItem.Raw,
    Mailchimp.ListTemplatesResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListTemplatesResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListTemplatesResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListTemplatesResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
