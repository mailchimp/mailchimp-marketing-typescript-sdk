//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ListMembersLocation: core.serialization.ObjectSchema<
    serializers.ListMembersLocation.Raw,
    Mailchimp.ListMembersLocation
> = core.serialization.object({
    countryCode: core.serialization.property("country_code", core.serialization.string().optional()),
    dstoff: core.serialization.number().optional(),
    gmtoff: core.serialization.number().optional(),
    latitude: core.serialization.number().optional(),
    longitude: core.serialization.number().optional(),
    region: core.serialization.string().optional(),
    timezone: core.serialization.string().optional(),
});

export declare namespace ListMembersLocation {
    export interface Raw {
        country_code?: string | null;
        dstoff?: number | null;
        gmtoff?: number | null;
        latitude?: number | null;
        longitude?: number | null;
        region?: string | null;
        timezone?: string | null;
    }
}
