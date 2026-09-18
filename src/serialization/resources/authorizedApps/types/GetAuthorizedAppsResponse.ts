//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GetAuthorizedAppsResponseLinksItem } from "./GetAuthorizedAppsResponseLinksItem.js";

export const GetAuthorizedAppsResponse: core.serialization.ObjectSchema<
    serializers.GetAuthorizedAppsResponse.Raw,
    Mailchimp.GetAuthorizedAppsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(GetAuthorizedAppsResponseLinksItem).optional(),
    ),
    description: core.serialization.string().optional(),
    id: core.serialization.number().optional(),
    name: core.serialization.string().optional(),
    users: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace GetAuthorizedAppsResponse {
    export interface Raw {
        _links?: GetAuthorizedAppsResponseLinksItem.Raw[] | null;
        description?: string | null;
        id?: number | null;
        name?: string | null;
        users?: string[] | null;
    }
}
