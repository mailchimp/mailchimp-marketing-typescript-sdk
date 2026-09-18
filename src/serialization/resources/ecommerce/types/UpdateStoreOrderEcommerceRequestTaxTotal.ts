//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStoreOrderEcommerceRequestTaxTotal: core.serialization.Schema<
    serializers.UpdateStoreOrderEcommerceRequestTaxTotal.Raw,
    Mailchimp.UpdateStoreOrderEcommerceRequestTaxTotal
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace UpdateStoreOrderEcommerceRequestTaxTotal {
    export type Raw = number | string;
}
