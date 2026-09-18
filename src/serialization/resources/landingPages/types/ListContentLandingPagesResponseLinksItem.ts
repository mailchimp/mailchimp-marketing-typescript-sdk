//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListContentLandingPagesResponseLinksItemMethod } from "./ListContentLandingPagesResponseLinksItemMethod.js";

export const ListContentLandingPagesResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListContentLandingPagesResponseLinksItem.Raw,
    Mailchimp.ListContentLandingPagesResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListContentLandingPagesResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListContentLandingPagesResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListContentLandingPagesResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
