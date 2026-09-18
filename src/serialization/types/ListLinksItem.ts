//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ListLinksItemMethod } from "./ListLinksItemMethod.js";

export const ListLinksItem: core.serialization.ObjectSchema<serializers.ListLinksItem.Raw, Mailchimp.ListLinksItem> =
    core.serialization.object({
        href: core.serialization.string().optional(),
        method: ListLinksItemMethod.optional(),
        rel: core.serialization.string().optional(),
        schema: core.serialization.string().optional(),
        targetSchema: core.serialization.string().optional(),
    });

export declare namespace ListLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
