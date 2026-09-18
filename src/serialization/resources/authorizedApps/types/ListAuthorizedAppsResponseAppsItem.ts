//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListAuthorizedAppsResponseAppsItemLinksItem } from "./ListAuthorizedAppsResponseAppsItemLinksItem.js";

export const ListAuthorizedAppsResponseAppsItem: core.serialization.ObjectSchema<
    serializers.ListAuthorizedAppsResponseAppsItem.Raw,
    Mailchimp.ListAuthorizedAppsResponseAppsItem
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListAuthorizedAppsResponseAppsItemLinksItem).optional(),
    ),
    description: core.serialization.string().optional(),
    id: core.serialization.number().optional(),
    name: core.serialization.string().optional(),
    users: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ListAuthorizedAppsResponseAppsItem {
    export interface Raw {
        _links?: ListAuthorizedAppsResponseAppsItemLinksItem.Raw[] | null;
        description?: string | null;
        id?: number | null;
        name?: string | null;
        users?: string[] | null;
    }
}
