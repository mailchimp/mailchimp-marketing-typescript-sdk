//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateStoreEcommerceRequestAddressLatitude } from "./CreateStoreEcommerceRequestAddressLatitude.js";
import { CreateStoreEcommerceRequestAddressLongitude } from "./CreateStoreEcommerceRequestAddressLongitude.js";

export const CreateStoreEcommerceRequestAddress: core.serialization.ObjectSchema<
    serializers.CreateStoreEcommerceRequestAddress.Raw,
    Mailchimp.CreateStoreEcommerceRequestAddress
> = core.serialization.object({
    address1: core.serialization.string().optional(),
    address2: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    country: core.serialization.string().optional(),
    countryCode: core.serialization.property("country_code", core.serialization.string().optional()),
    latitude: CreateStoreEcommerceRequestAddressLatitude.optional(),
    longitude: CreateStoreEcommerceRequestAddressLongitude.optional(),
    postalCode: core.serialization.property("postal_code", core.serialization.string().optional()),
    province: core.serialization.string().optional(),
    provinceCode: core.serialization.property("province_code", core.serialization.string().optional()),
});

export declare namespace CreateStoreEcommerceRequestAddress {
    export interface Raw {
        address1?: string | null;
        address2?: string | null;
        city?: string | null;
        country?: string | null;
        country_code?: string | null;
        latitude?: CreateStoreEcommerceRequestAddressLatitude.Raw | null;
        longitude?: CreateStoreEcommerceRequestAddressLongitude.Raw | null;
        postal_code?: string | null;
        province?: string | null;
        province_code?: string | null;
    }
}
