//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateStoreOrderEcommerceRequestPromosItemAmountDiscounted } from "./UpdateStoreOrderEcommerceRequestPromosItemAmountDiscounted.js";
import { UpdateStoreOrderEcommerceRequestPromosItemType } from "./UpdateStoreOrderEcommerceRequestPromosItemType.js";

export const UpdateStoreOrderEcommerceRequestPromosItem: core.serialization.ObjectSchema<
    serializers.UpdateStoreOrderEcommerceRequestPromosItem.Raw,
    Mailchimp.UpdateStoreOrderEcommerceRequestPromosItem
> = core.serialization.object({
    amountDiscounted: core.serialization.property(
        "amount_discounted",
        UpdateStoreOrderEcommerceRequestPromosItemAmountDiscounted,
    ),
    code: core.serialization.string(),
    type: UpdateStoreOrderEcommerceRequestPromosItemType,
});

export declare namespace UpdateStoreOrderEcommerceRequestPromosItem {
    export interface Raw {
        amount_discounted: UpdateStoreOrderEcommerceRequestPromosItemAmountDiscounted.Raw;
        code: string;
        type: UpdateStoreOrderEcommerceRequestPromosItemType.Raw;
    }
}
