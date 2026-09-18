//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListLocationsReportsResponseLocationsItem: core.serialization.ObjectSchema<
    serializers.ListLocationsReportsResponseLocationsItem.Raw,
    Mailchimp.ListLocationsReportsResponseLocationsItem
> = core.serialization.object({
    countryCode: core.serialization.property("country_code", core.serialization.string().optional()),
    opens: core.serialization.number().optional(),
    proxyExcludedOpens: core.serialization.property("proxy_excluded_opens", core.serialization.number().optional()),
    region: core.serialization.string().optional(),
    regionName: core.serialization.property("region_name", core.serialization.string().optional()),
});

export declare namespace ListLocationsReportsResponseLocationsItem {
    export interface Raw {
        country_code?: string | null;
        opens?: number | null;
        proxy_excluded_opens?: number | null;
        region?: string | null;
        region_name?: string | null;
    }
}
