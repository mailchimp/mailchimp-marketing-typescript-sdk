//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SignupFormLinksItemMethod } from "./SignupFormLinksItemMethod.js";

export const SignupFormLinksItem: core.serialization.ObjectSchema<
    serializers.SignupFormLinksItem.Raw,
    Mailchimp.SignupFormLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: SignupFormLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace SignupFormLinksItem {
    export interface Raw {
        href?: string | null;
        method?: SignupFormLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
