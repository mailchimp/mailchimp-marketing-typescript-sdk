//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { EcommerceStoresOrdersPost } from "../../../types/EcommerceStoresOrdersPost.js";
import { CreateStoreOrderEcommerceRequestLinesItemDiscount } from "./CreateStoreOrderEcommerceRequestLinesItemDiscount.js";
import { CreateStoreOrderEcommerceRequestLinesItemPrice } from "./CreateStoreOrderEcommerceRequestLinesItemPrice.js";

export const CreateStoreOrderEcommerceRequestLinesItem: core.serialization.ObjectSchema<
    serializers.CreateStoreOrderEcommerceRequestLinesItem.Raw,
    Mailchimp.CreateStoreOrderEcommerceRequestLinesItem
> = core.serialization.object({
    discount: CreateStoreOrderEcommerceRequestLinesItemDiscount.optional(),
    id: core.serialization.string(),
    price: CreateStoreOrderEcommerceRequestLinesItemPrice,
    product: EcommerceStoresOrdersPost.optional(),
    productId: core.serialization.property("product_id", core.serialization.string()),
    productVariantId: core.serialization.property("product_variant_id", core.serialization.string()),
    quantity: core.serialization.number(),
});

export declare namespace CreateStoreOrderEcommerceRequestLinesItem {
    export interface Raw {
        discount?: CreateStoreOrderEcommerceRequestLinesItemDiscount.Raw | null;
        id: string;
        price: CreateStoreOrderEcommerceRequestLinesItemPrice.Raw;
        product?: EcommerceStoresOrdersPost.Raw | null;
        product_id: string;
        product_variant_id: string;
        quantity: number;
    }
}
