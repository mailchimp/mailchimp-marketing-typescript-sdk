//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateStoreCartEcommerceRequestLinesItemPrice } from "./UpdateStoreCartEcommerceRequestLinesItemPrice.js";

export const UpdateStoreCartEcommerceRequestLinesItem: core.serialization.ObjectSchema<
    serializers.UpdateStoreCartEcommerceRequestLinesItem.Raw,
    Mailchimp.UpdateStoreCartEcommerceRequestLinesItem
> = core.serialization.object({
    price: UpdateStoreCartEcommerceRequestLinesItemPrice.optional(),
    productId: core.serialization.property("product_id", core.serialization.string().optional()),
    productVariantId: core.serialization.property("product_variant_id", core.serialization.string().optional()),
    quantity: core.serialization.number().optional(),
});

export declare namespace UpdateStoreCartEcommerceRequestLinesItem {
    export interface Raw {
        price?: UpdateStoreCartEcommerceRequestLinesItemPrice.Raw | null;
        product_id?: string | null;
        product_variant_id?: string | null;
        quantity?: number | null;
    }
}
