//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStoreOrderEcommerceRequestBillingAddressLatitude: core.serialization.Schema<
    serializers.UpdateStoreOrderEcommerceRequestBillingAddressLatitude.Raw,
    Mailchimp.UpdateStoreOrderEcommerceRequestBillingAddressLatitude
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace UpdateStoreOrderEcommerceRequestBillingAddressLatitude {
    export type Raw = number | string;
}
