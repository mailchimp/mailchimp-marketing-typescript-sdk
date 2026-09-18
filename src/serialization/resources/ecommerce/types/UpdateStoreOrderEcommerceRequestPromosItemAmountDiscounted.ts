//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateStoreOrderEcommerceRequestPromosItemAmountDiscounted: core.serialization.Schema<
    serializers.UpdateStoreOrderEcommerceRequestPromosItemAmountDiscounted.Raw,
    Mailchimp.UpdateStoreOrderEcommerceRequestPromosItemAmountDiscounted
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string()]);

export declare namespace UpdateStoreOrderEcommerceRequestPromosItemAmountDiscounted {
    export type Raw = number | string;
}
