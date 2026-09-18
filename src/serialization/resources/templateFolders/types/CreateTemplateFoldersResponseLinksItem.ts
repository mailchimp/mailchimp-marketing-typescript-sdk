//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateTemplateFoldersResponseLinksItemMethod } from "./CreateTemplateFoldersResponseLinksItemMethod.js";

export const CreateTemplateFoldersResponseLinksItem: core.serialization.ObjectSchema<
    serializers.CreateTemplateFoldersResponseLinksItem.Raw,
    Mailchimp.CreateTemplateFoldersResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: CreateTemplateFoldersResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace CreateTemplateFoldersResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: CreateTemplateFoldersResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
