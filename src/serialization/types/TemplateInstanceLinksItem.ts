//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { TemplateInstanceLinksItemMethod } from "./TemplateInstanceLinksItemMethod.js";

export const TemplateInstanceLinksItem: core.serialization.ObjectSchema<
    serializers.TemplateInstanceLinksItem.Raw,
    Mailchimp.TemplateInstanceLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: TemplateInstanceLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace TemplateInstanceLinksItem {
    export interface Raw {
        href?: string | null;
        method?: TemplateInstanceLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
