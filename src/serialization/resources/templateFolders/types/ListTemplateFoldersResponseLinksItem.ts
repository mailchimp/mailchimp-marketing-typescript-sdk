//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListTemplateFoldersResponseLinksItemMethod } from "./ListTemplateFoldersResponseLinksItemMethod.js";

export const ListTemplateFoldersResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListTemplateFoldersResponseLinksItem.Raw,
    Mailchimp.ListTemplateFoldersResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListTemplateFoldersResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListTemplateFoldersResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListTemplateFoldersResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
