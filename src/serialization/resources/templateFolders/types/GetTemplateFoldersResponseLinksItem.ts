//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GetTemplateFoldersResponseLinksItemMethod } from "./GetTemplateFoldersResponseLinksItemMethod.js";

export const GetTemplateFoldersResponseLinksItem: core.serialization.ObjectSchema<
    serializers.GetTemplateFoldersResponseLinksItem.Raw,
    Mailchimp.GetTemplateFoldersResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: GetTemplateFoldersResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace GetTemplateFoldersResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: GetTemplateFoldersResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
