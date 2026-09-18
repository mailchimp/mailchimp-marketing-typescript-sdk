//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateStoreCartLineEcommerceRequestPrice } from "../../types/CreateStoreCartLineEcommerceRequestPrice.js";

export const CreateStoreCartLineEcommerceRequest: core.serialization.Schema<
    serializers.CreateStoreCartLineEcommerceRequest.Raw,
    Omit<Mailchimp.CreateStoreCartLineEcommerceRequest, "storeId" | "cartId">
> = core.serialization.object({
    id: core.serialization.string(),
    price: CreateStoreCartLineEcommerceRequestPrice,
    productId: core.serialization.property("product_id", core.serialization.string()),
    productVariantId: core.serialization.property("product_variant_id", core.serialization.string()),
    quantity: core.serialization.number(),
});

export declare namespace CreateStoreCartLineEcommerceRequest {
    export interface Raw {
        id: string;
        price: CreateStoreCartLineEcommerceRequestPrice.Raw;
        product_id: string;
        product_variant_id: string;
        quantity: number;
    }
}
