//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListLandingPagesResponseLinksItemMethod } from "./ListLandingPagesResponseLinksItemMethod.js";

export const ListLandingPagesResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListLandingPagesResponseLinksItem.Raw,
    Mailchimp.ListLandingPagesResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListLandingPagesResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListLandingPagesResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListLandingPagesResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
