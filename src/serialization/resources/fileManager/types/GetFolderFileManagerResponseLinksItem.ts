//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GetFolderFileManagerResponseLinksItemMethod } from "./GetFolderFileManagerResponseLinksItemMethod.js";

export const GetFolderFileManagerResponseLinksItem: core.serialization.ObjectSchema<
    serializers.GetFolderFileManagerResponseLinksItem.Raw,
    Mailchimp.GetFolderFileManagerResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: GetFolderFileManagerResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace GetFolderFileManagerResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: GetFolderFileManagerResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
