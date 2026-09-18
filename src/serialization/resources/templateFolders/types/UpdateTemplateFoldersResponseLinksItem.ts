//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateTemplateFoldersResponseLinksItemMethod } from "./UpdateTemplateFoldersResponseLinksItemMethod.js";

export const UpdateTemplateFoldersResponseLinksItem: core.serialization.ObjectSchema<
    serializers.UpdateTemplateFoldersResponseLinksItem.Raw,
    Mailchimp.UpdateTemplateFoldersResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: UpdateTemplateFoldersResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace UpdateTemplateFoldersResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: UpdateTemplateFoldersResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
