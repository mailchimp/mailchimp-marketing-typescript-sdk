//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ECommerceProductVariant } from "../../../types/ECommerceProductVariant.js";
import { ListStoreProductVariantsEcommerceResponseLinksItem } from "./ListStoreProductVariantsEcommerceResponseLinksItem.js";

export const ListStoreProductVariantsEcommerceResponse: core.serialization.ObjectSchema<
    serializers.ListStoreProductVariantsEcommerceResponse.Raw,
    Mailchimp.ListStoreProductVariantsEcommerceResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListStoreProductVariantsEcommerceResponseLinksItem).optional(),
    ),
    productId: core.serialization.property("product_id", core.serialization.string().optional()),
    storeId: core.serialization.property("store_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
    variants: core.serialization.list(ECommerceProductVariant).optional(),
});

export declare namespace ListStoreProductVariantsEcommerceResponse {
    export interface Raw {
        _links?: ListStoreProductVariantsEcommerceResponseLinksItem.Raw[] | null;
        product_id?: string | null;
        store_id?: string | null;
        total_items?: number | null;
        variants?: ECommerceProductVariant.Raw[] | null;
    }
}
