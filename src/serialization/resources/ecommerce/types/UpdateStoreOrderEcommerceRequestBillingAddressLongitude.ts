//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStoreOrderEcommerceRequestBillingAddressLongitude: core.serialization.Schema<
    serializers.UpdateStoreOrderEcommerceRequestBillingAddressLongitude.Raw,
    Mailchimp.UpdateStoreOrderEcommerceRequestBillingAddressLongitude
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace UpdateStoreOrderEcommerceRequestBillingAddressLongitude {
    export type Raw = number | string;
}
