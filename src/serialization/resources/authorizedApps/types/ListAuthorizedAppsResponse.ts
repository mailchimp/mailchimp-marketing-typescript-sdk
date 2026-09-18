//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListAuthorizedAppsResponseAppsItem } from "./ListAuthorizedAppsResponseAppsItem.js";
import { ListAuthorizedAppsResponseLinksItem } from "./ListAuthorizedAppsResponseLinksItem.js";

export const ListAuthorizedAppsResponse: core.serialization.ObjectSchema<
    serializers.ListAuthorizedAppsResponse.Raw,
    Mailchimp.ListAuthorizedAppsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListAuthorizedAppsResponseLinksItem).optional(),
    ),
    apps: core.serialization.list(ListAuthorizedAppsResponseAppsItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListAuthorizedAppsResponse {
    export interface Raw {
        _links?: ListAuthorizedAppsResponseLinksItem.Raw[] | null;
        apps?: ListAuthorizedAppsResponseAppsItem.Raw[] | null;
        total_items?: number | null;
    }
}
