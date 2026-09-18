//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListFolderFilesFileManagerResponseLinksItemMethod } from "./ListFolderFilesFileManagerResponseLinksItemMethod.js";

export const ListFolderFilesFileManagerResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListFolderFilesFileManagerResponseLinksItem.Raw,
    Mailchimp.ListFolderFilesFileManagerResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListFolderFilesFileManagerResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListFolderFilesFileManagerResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListFolderFilesFileManagerResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
