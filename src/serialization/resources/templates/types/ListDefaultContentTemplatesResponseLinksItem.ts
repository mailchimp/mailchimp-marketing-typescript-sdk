//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListDefaultContentTemplatesResponseLinksItemMethod } from "./ListDefaultContentTemplatesResponseLinksItemMethod.js";

export const ListDefaultContentTemplatesResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListDefaultContentTemplatesResponseLinksItem.Raw,
    Mailchimp.ListDefaultContentTemplatesResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListDefaultContentTemplatesResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListDefaultContentTemplatesResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListDefaultContentTemplatesResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
