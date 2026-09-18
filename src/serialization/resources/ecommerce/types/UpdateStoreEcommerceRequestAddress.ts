//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateStoreEcommerceRequestAddressLatitude } from "./UpdateStoreEcommerceRequestAddressLatitude.js";
import { UpdateStoreEcommerceRequestAddressLongitude } from "./UpdateStoreEcommerceRequestAddressLongitude.js";

export const UpdateStoreEcommerceRequestAddress: core.serialization.ObjectSchema<
    serializers.UpdateStoreEcommerceRequestAddress.Raw,
    Mailchimp.UpdateStoreEcommerceRequestAddress
> = core.serialization.object({
    address1: core.serialization.string().optional(),
    address2: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    country: core.serialization.string().optional(),
    countryCode: core.serialization.property("country_code", core.serialization.string().optional()),
    latitude: UpdateStoreEcommerceRequestAddressLatitude.optional(),
    longitude: UpdateStoreEcommerceRequestAddressLongitude.optional(),
    postalCode: core.serialization.property("postal_code", core.serialization.string().optional()),
    province: core.serialization.string().optional(),
    provinceCode: core.serialization.property("province_code", core.serialization.string().optional()),
});

export declare namespace UpdateStoreEcommerceRequestAddress {
    export interface Raw {
        address1?: string | null;
        address2?: string | null;
        city?: string | null;
        country?: string | null;
        country_code?: string | null;
        latitude?: UpdateStoreEcommerceRequestAddressLatitude.Raw | null;
        longitude?: UpdateStoreEcommerceRequestAddressLongitude.Raw | null;
        postal_code?: string | null;
        province?: string | null;
        province_code?: string | null;
    }
}
