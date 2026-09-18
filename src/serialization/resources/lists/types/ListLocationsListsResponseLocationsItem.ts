//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListLocationsListsResponseLocationsItem: core.serialization.ObjectSchema<
    serializers.ListLocationsListsResponseLocationsItem.Raw,
    Mailchimp.ListLocationsListsResponseLocationsItem
> = core.serialization.object({
    cc: core.serialization.string().optional(),
    country: core.serialization.string().optional(),
    percent: core.serialization.number().optional(),
    total: core.serialization.number().optional(),
});

export declare namespace ListLocationsListsResponseLocationsItem {
    export interface Raw {
        cc?: string | null;
        country?: string | null;
        percent?: number | null;
        total?: number | null;
    }
}
