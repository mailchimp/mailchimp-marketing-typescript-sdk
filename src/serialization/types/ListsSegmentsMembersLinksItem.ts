//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ListsSegmentsMembersLinksItemMethod } from "./ListsSegmentsMembersLinksItemMethod.js";

export const ListsSegmentsMembersLinksItem: core.serialization.ObjectSchema<
    serializers.ListsSegmentsMembersLinksItem.Raw,
    Mailchimp.ListsSegmentsMembersLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListsSegmentsMembersLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListsSegmentsMembersLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListsSegmentsMembersLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
