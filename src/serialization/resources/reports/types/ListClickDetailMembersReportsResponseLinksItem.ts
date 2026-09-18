//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListClickDetailMembersReportsResponseLinksItemMethod } from "./ListClickDetailMembersReportsResponseLinksItemMethod.js";

export const ListClickDetailMembersReportsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListClickDetailMembersReportsResponseLinksItem.Raw,
    Mailchimp.ListClickDetailMembersReportsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListClickDetailMembersReportsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListClickDetailMembersReportsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListClickDetailMembersReportsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
