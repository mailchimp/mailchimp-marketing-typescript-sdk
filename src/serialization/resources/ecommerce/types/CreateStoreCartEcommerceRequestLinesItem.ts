//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateStoreCartEcommerceRequestLinesItemPrice } from "./CreateStoreCartEcommerceRequestLinesItemPrice.js";

export const CreateStoreCartEcommerceRequestLinesItem: core.serialization.ObjectSchema<
    serializers.CreateStoreCartEcommerceRequestLinesItem.Raw,
    Mailchimp.CreateStoreCartEcommerceRequestLinesItem
> = core.serialization.object({
    id: core.serialization.string(),
    price: CreateStoreCartEcommerceRequestLinesItemPrice,
    productId: core.serialization.property("product_id", core.serialization.string()),
    productVariantId: core.serialization.property("product_variant_id", core.serialization.string()),
    quantity: core.serialization.number(),
});

export declare namespace CreateStoreCartEcommerceRequestLinesItem {
    export interface Raw {
        id: string;
        price: CreateStoreCartEcommerceRequestLinesItemPrice.Raw;
        product_id: string;
        product_variant_id: string;
        quantity: number;
    }
}
