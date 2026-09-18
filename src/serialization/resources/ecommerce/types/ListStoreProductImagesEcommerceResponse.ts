//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListStoreProductImagesEcommerceResponseImagesItem } from "./ListStoreProductImagesEcommerceResponseImagesItem.js";
import { ListStoreProductImagesEcommerceResponseLinksItem } from "./ListStoreProductImagesEcommerceResponseLinksItem.js";

export const ListStoreProductImagesEcommerceResponse: core.serialization.ObjectSchema<
    serializers.ListStoreProductImagesEcommerceResponse.Raw,
    Mailchimp.ListStoreProductImagesEcommerceResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListStoreProductImagesEcommerceResponseLinksItem).optional(),
    ),
    images: core.serialization.list(ListStoreProductImagesEcommerceResponseImagesItem).optional(),
    productId: core.serialization.property("product_id", core.serialization.string().optional()),
    storeId: core.serialization.property("store_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListStoreProductImagesEcommerceResponse {
    export interface Raw {
        _links?: ListStoreProductImagesEcommerceResponseLinksItem.Raw[] | null;
        images?: ListStoreProductImagesEcommerceResponseImagesItem.Raw[] | null;
        product_id?: string | null;
        store_id?: string | null;
        total_items?: number | null;
    }
}
