//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListAuthorizedAppsResponseAppsItemLinksItemMethod } from "./ListAuthorizedAppsResponseAppsItemLinksItemMethod.js";

export const ListAuthorizedAppsResponseAppsItemLinksItem: core.serialization.ObjectSchema<
    serializers.ListAuthorizedAppsResponseAppsItemLinksItem.Raw,
    Mailchimp.ListAuthorizedAppsResponseAppsItemLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListAuthorizedAppsResponseAppsItemLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListAuthorizedAppsResponseAppsItemLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListAuthorizedAppsResponseAppsItemLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
