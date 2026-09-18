//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateStoreOrderEcommerceRequestLinesItemDiscount } from "./UpdateStoreOrderEcommerceRequestLinesItemDiscount.js";
import { UpdateStoreOrderEcommerceRequestLinesItemPrice } from "./UpdateStoreOrderEcommerceRequestLinesItemPrice.js";

export const UpdateStoreOrderEcommerceRequestLinesItem: core.serialization.ObjectSchema<
    serializers.UpdateStoreOrderEcommerceRequestLinesItem.Raw,
    Mailchimp.UpdateStoreOrderEcommerceRequestLinesItem
> = core.serialization.object({
    discount: UpdateStoreOrderEcommerceRequestLinesItemDiscount.optional(),
    id: core.serialization.string().optional(),
    price: UpdateStoreOrderEcommerceRequestLinesItemPrice.optional(),
    productId: core.serialization.property("product_id", core.serialization.string().optional()),
    productVariantId: core.serialization.property("product_variant_id", core.serialization.string().optional()),
    quantity: core.serialization.number().optional(),
});

export declare namespace UpdateStoreOrderEcommerceRequestLinesItem {
    export interface Raw {
        discount?: UpdateStoreOrderEcommerceRequestLinesItemDiscount.Raw | null;
        id?: string | null;
        price?: UpdateStoreOrderEcommerceRequestLinesItemPrice.Raw | null;
        product_id?: string | null;
        product_variant_id?: string | null;
        quantity?: number | null;
    }
}
