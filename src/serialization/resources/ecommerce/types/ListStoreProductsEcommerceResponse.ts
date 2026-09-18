//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ECommerceProduct } from "../../../types/ECommerceProduct.js";
import { ListStoreProductsEcommerceResponseLinksItem } from "./ListStoreProductsEcommerceResponseLinksItem.js";

export const ListStoreProductsEcommerceResponse: core.serialization.ObjectSchema<
    serializers.ListStoreProductsEcommerceResponse.Raw,
    Mailchimp.ListStoreProductsEcommerceResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListStoreProductsEcommerceResponseLinksItem).optional(),
    ),
    products: core.serialization.list(ECommerceProduct).optional(),
    storeId: core.serialization.property("store_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListStoreProductsEcommerceResponse {
    export interface Raw {
        _links?: ListStoreProductsEcommerceResponseLinksItem.Raw[] | null;
        products?: ECommerceProduct.Raw[] | null;
        store_id?: string | null;
        total_items?: number | null;
    }
}
