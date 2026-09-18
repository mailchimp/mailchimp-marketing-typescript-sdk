//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListFilesFileManagerResponseLinksItemMethod } from "./ListFilesFileManagerResponseLinksItemMethod.js";

export const ListFilesFileManagerResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListFilesFileManagerResponseLinksItem.Raw,
    Mailchimp.ListFilesFileManagerResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListFilesFileManagerResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListFilesFileManagerResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListFilesFileManagerResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
