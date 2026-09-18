//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ConnectedSite } from "../../../types/ConnectedSite.js";
import { ListConnectedSitesResponseLinksItem } from "./ListConnectedSitesResponseLinksItem.js";

export const ListConnectedSitesResponse: core.serialization.ObjectSchema<
    serializers.ListConnectedSitesResponse.Raw,
    Mailchimp.ListConnectedSitesResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListConnectedSitesResponseLinksItem).optional(),
    ),
    sites: core.serialization.list(ConnectedSite).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListConnectedSitesResponse {
    export interface Raw {
        _links?: ListConnectedSitesResponseLinksItem.Raw[] | null;
        sites?: ConnectedSite.Raw[] | null;
        total_items?: number | null;
    }
}
