//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStoreCartEcommerceRequestLinesItemPrice: core.serialization.Schema<
    serializers.UpdateStoreCartEcommerceRequestLinesItemPrice.Raw,
    Mailchimp.UpdateStoreCartEcommerceRequestLinesItemPrice
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace UpdateStoreCartEcommerceRequestLinesItemPrice {
    export type Raw = number | string;
}
