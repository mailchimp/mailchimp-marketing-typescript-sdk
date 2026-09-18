//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListAuthorizedAppsResponseLinksItemMethod } from "./ListAuthorizedAppsResponseLinksItemMethod.js";

export const ListAuthorizedAppsResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListAuthorizedAppsResponseLinksItem.Raw,
    Mailchimp.ListAuthorizedAppsResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListAuthorizedAppsResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListAuthorizedAppsResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListAuthorizedAppsResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
