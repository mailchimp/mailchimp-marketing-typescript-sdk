//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ClickDetailMemberLinksItemMethod } from "./ClickDetailMemberLinksItemMethod.js";

export const ClickDetailMemberLinksItem: core.serialization.ObjectSchema<
    serializers.ClickDetailMemberLinksItem.Raw,
    Mailchimp.ClickDetailMemberLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ClickDetailMemberLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ClickDetailMemberLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ClickDetailMemberLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
