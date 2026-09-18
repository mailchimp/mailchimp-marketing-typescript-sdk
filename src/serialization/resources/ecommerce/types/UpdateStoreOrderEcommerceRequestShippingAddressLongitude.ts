//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStoreOrderEcommerceRequestShippingAddressLongitude: core.serialization.Schema<
    serializers.UpdateStoreOrderEcommerceRequestShippingAddressLongitude.Raw,
    Mailchimp.UpdateStoreOrderEcommerceRequestShippingAddressLongitude
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace UpdateStoreOrderEcommerceRequestShippingAddressLongitude {
    export type Raw = number | string;
}
