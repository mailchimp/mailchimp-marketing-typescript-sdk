//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListLocationsListsResponseLinksItem } from "./ListLocationsListsResponseLinksItem.js";
import { ListLocationsListsResponseLocationsItem } from "./ListLocationsListsResponseLocationsItem.js";

export const ListLocationsListsResponse: core.serialization.ObjectSchema<
    serializers.ListLocationsListsResponse.Raw,
    Mailchimp.ListLocationsListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListLocationsListsResponseLinksItem).optional(),
    ),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    locations: core.serialization.list(ListLocationsListsResponseLocationsItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListLocationsListsResponse {
    export interface Raw {
        _links?: ListLocationsListsResponseLinksItem.Raw[] | null;
        list_id?: string | null;
        locations?: ListLocationsListsResponseLocationsItem.Raw[] | null;
        total_items?: number | null;
    }
}
