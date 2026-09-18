//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateFolderFileManagerResponseLinksItemMethod } from "./CreateFolderFileManagerResponseLinksItemMethod.js";

export const CreateFolderFileManagerResponseLinksItem: core.serialization.ObjectSchema<
    serializers.CreateFolderFileManagerResponseLinksItem.Raw,
    Mailchimp.CreateFolderFileManagerResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: CreateFolderFileManagerResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace CreateFolderFileManagerResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: CreateFolderFileManagerResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
