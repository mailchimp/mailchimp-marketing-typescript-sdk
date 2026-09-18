//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ECommerceStoreAddress: core.serialization.ObjectSchema<
    serializers.ECommerceStoreAddress.Raw,
    Mailchimp.ECommerceStoreAddress
> = core.serialization.object({
    address1: core.serialization.string().optional(),
    address2: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    country: core.serialization.string().optional(),
    countryCode: core.serialization.property("country_code", core.serialization.string().optional()),
    latitude: core.serialization.number().optional(),
    longitude: core.serialization.number().optional(),
    postalCode: core.serialization.property("postal_code", core.serialization.string().optional()),
    province: core.serialization.string().optional(),
    provinceCode: core.serialization.property("province_code", core.serialization.string().optional()),
});

export declare namespace ECommerceStoreAddress {
    export interface Raw {
        address1?: string | null;
        address2?: string | null;
        city?: string | null;
        country?: string | null;
        country_code?: string | null;
        latitude?: number | null;
        longitude?: number | null;
        postal_code?: string | null;
        province?: string | null;
        province_code?: string | null;
    }
}
