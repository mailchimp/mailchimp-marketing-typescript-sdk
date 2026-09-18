//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateFolderFileManagerResponseLinksItemMethod } from "./UpdateFolderFileManagerResponseLinksItemMethod.js";

export const UpdateFolderFileManagerResponseLinksItem: core.serialization.ObjectSchema<
    serializers.UpdateFolderFileManagerResponseLinksItem.Raw,
    Mailchimp.UpdateFolderFileManagerResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: UpdateFolderFileManagerResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace UpdateFolderFileManagerResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: UpdateFolderFileManagerResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
