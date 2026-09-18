//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { LandingPageLinksItemMethod } from "./LandingPageLinksItemMethod.js";

export const LandingPageLinksItem: core.serialization.ObjectSchema<
    serializers.LandingPageLinksItem.Raw,
    Mailchimp.LandingPageLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: LandingPageLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace LandingPageLinksItem {
    export interface Raw {
        href?: string | null;
        method?: LandingPageLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
