//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateStoreOrderEcommerceRequestPromosItemAmountDiscounted } from "./CreateStoreOrderEcommerceRequestPromosItemAmountDiscounted.js";
import { CreateStoreOrderEcommerceRequestPromosItemType } from "./CreateStoreOrderEcommerceRequestPromosItemType.js";

export const CreateStoreOrderEcommerceRequestPromosItem: core.serialization.ObjectSchema<
    serializers.CreateStoreOrderEcommerceRequestPromosItem.Raw,
    Mailchimp.CreateStoreOrderEcommerceRequestPromosItem
> = core.serialization.object({
    amountDiscounted: core.serialization.property(
        "amount_discounted",
        CreateStoreOrderEcommerceRequestPromosItemAmountDiscounted,
    ),
    code: core.serialization.string(),
    type: CreateStoreOrderEcommerceRequestPromosItemType,
});

export declare namespace CreateStoreOrderEcommerceRequestPromosItem {
    export interface Raw {
        amount_discounted: CreateStoreOrderEcommerceRequestPromosItemAmountDiscounted.Raw;
        code: string;
        type: CreateStoreOrderEcommerceRequestPromosItemType.Raw;
    }
}
