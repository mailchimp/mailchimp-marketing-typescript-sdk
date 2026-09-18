//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStoreOrderEcommerceRequestLinesItemPrice: core.serialization.Schema<
    serializers.UpdateStoreOrderEcommerceRequestLinesItemPrice.Raw,
    Mailchimp.UpdateStoreOrderEcommerceRequestLinesItemPrice
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace UpdateStoreOrderEcommerceRequestLinesItemPrice {
    export type Raw = number | string;
}
