//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListLocationsReportsResponseLinksItem } from "./ListLocationsReportsResponseLinksItem.js";
import { ListLocationsReportsResponseLocationsItem } from "./ListLocationsReportsResponseLocationsItem.js";

export const ListLocationsReportsResponse: core.serialization.ObjectSchema<
    serializers.ListLocationsReportsResponse.Raw,
    Mailchimp.ListLocationsReportsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListLocationsReportsResponseLinksItem).optional(),
    ),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    locations: core.serialization.list(ListLocationsReportsResponseLocationsItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListLocationsReportsResponse {
    export interface Raw {
        _links?: ListLocationsReportsResponseLinksItem.Raw[] | null;
        campaign_id?: string | null;
        locations?: ListLocationsReportsResponseLocationsItem.Raw[] | null;
        total_items?: number | null;
    }
}
