//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListFileManagerResponseItemMethod } from "./ListFileManagerResponseItemMethod.js";

export const ListFileManagerResponseItem: core.serialization.ObjectSchema<
    serializers.ListFileManagerResponseItem.Raw,
    Mailchimp.ListFileManagerResponseItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListFileManagerResponseItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListFileManagerResponseItem {
    export interface Raw {
        href?: string | null;
        method?: ListFileManagerResponseItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
