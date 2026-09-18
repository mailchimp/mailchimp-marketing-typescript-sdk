//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStoreOrderEcommerceRequestShippingAddressLongitude: core.serialization.Schema<
    serializers.CreateStoreOrderEcommerceRequestShippingAddressLongitude.Raw,
    Mailchimp.CreateStoreOrderEcommerceRequestShippingAddressLongitude
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace CreateStoreOrderEcommerceRequestShippingAddressLongitude {
    export type Raw = number | string;
}
