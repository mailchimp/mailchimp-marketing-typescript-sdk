//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateStoreOrderEcommerceRequestBillingAddressLongitude: core.serialization.Schema<
    serializers.CreateStoreOrderEcommerceRequestBillingAddressLongitude.Raw,
    Mailchimp.CreateStoreOrderEcommerceRequestBillingAddressLongitude
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace CreateStoreOrderEcommerceRequestBillingAddressLongitude {
    export type Raw = number | string;
}
