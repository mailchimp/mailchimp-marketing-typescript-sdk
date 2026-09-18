//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateStoreOrderEcommerceRequestBillingAddressLatitude } from "./UpdateStoreOrderEcommerceRequestBillingAddressLatitude.js";
import { UpdateStoreOrderEcommerceRequestBillingAddressLongitude } from "./UpdateStoreOrderEcommerceRequestBillingAddressLongitude.js";

export const UpdateStoreOrderEcommerceRequestBillingAddress: core.serialization.ObjectSchema<
    serializers.UpdateStoreOrderEcommerceRequestBillingAddress.Raw,
    Mailchimp.UpdateStoreOrderEcommerceRequestBillingAddress
> = core.serialization.object({
    address1: core.serialization.string().optional(),
    address2: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    company: core.serialization.string().optional(),
    country: core.serialization.string().optional(),
    countryCode: core.serialization.property("country_code", core.serialization.string().optional()),
    latitude: UpdateStoreOrderEcommerceRequestBillingAddressLatitude.optional(),
    longitude: UpdateStoreOrderEcommerceRequestBillingAddressLongitude.optional(),
    name: core.serialization.string().optional(),
    phone: core.serialization.string().optional(),
    postalCode: core.serialization.property("postal_code", core.serialization.string().optional()),
    province: core.serialization.string().optional(),
    provinceCode: core.serialization.property("province_code", core.serialization.string().optional()),
});

export declare namespace UpdateStoreOrderEcommerceRequestBillingAddress {
    export interface Raw {
        address1?: string | null;
        address2?: string | null;
        city?: string | null;
        company?: string | null;
        country?: string | null;
        country_code?: string | null;
        latitude?: UpdateStoreOrderEcommerceRequestBillingAddressLatitude.Raw | null;
        longitude?: UpdateStoreOrderEcommerceRequestBillingAddressLongitude.Raw | null;
        name?: string | null;
        phone?: string | null;
        postal_code?: string | null;
        province?: string | null;
        province_code?: string | null;
    }
}
