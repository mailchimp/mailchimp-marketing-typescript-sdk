//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListTemplateFoldersResponseFoldersItemLinksItemMethod } from "./ListTemplateFoldersResponseFoldersItemLinksItemMethod.js";

export const ListTemplateFoldersResponseFoldersItemLinksItem: core.serialization.ObjectSchema<
    serializers.ListTemplateFoldersResponseFoldersItemLinksItem.Raw,
    Mailchimp.ListTemplateFoldersResponseFoldersItemLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListTemplateFoldersResponseFoldersItemLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListTemplateFoldersResponseFoldersItemLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListTemplateFoldersResponseFoldersItemLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
