//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListConnectedSitesResponseLinksItemMethod } from "./ListConnectedSitesResponseLinksItemMethod.js";

export const ListConnectedSitesResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListConnectedSitesResponseLinksItem.Raw,
    Mailchimp.ListConnectedSitesResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListConnectedSitesResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListConnectedSitesResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListConnectedSitesResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
