//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ListsSegmentsMembersLocation: core.serialization.ObjectSchema<
    serializers.ListsSegmentsMembersLocation.Raw,
    Mailchimp.ListsSegmentsMembersLocation
> = core.serialization.object({
    countryCode: core.serialization.property("country_code", core.serialization.string().optional()),
    dstoff: core.serialization.number().optional(),
    gmtoff: core.serialization.number().optional(),
    latitude: core.serialization.number().optional(),
    longitude: core.serialization.number().optional(),
    timezone: core.serialization.string().optional(),
});

export declare namespace ListsSegmentsMembersLocation {
    export interface Raw {
        country_code?: string | null;
        dstoff?: number | null;
        gmtoff?: number | null;
        latitude?: number | null;
        longitude?: number | null;
        timezone?: string | null;
    }
}
