//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { MemberNotesLinksItemMethod } from "./MemberNotesLinksItemMethod.js";

export const MemberNotesLinksItem: core.serialization.ObjectSchema<
    serializers.MemberNotesLinksItem.Raw,
    Mailchimp.MemberNotesLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: MemberNotesLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace MemberNotesLinksItem {
    export interface Raw {
        href?: string | null;
        method?: MemberNotesLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
