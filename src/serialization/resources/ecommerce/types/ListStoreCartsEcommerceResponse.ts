//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ECommerceCart } from "../../../types/ECommerceCart.js";
import { ListStoreCartsEcommerceResponseLinksItem } from "./ListStoreCartsEcommerceResponseLinksItem.js";

export const ListStoreCartsEcommerceResponse: core.serialization.ObjectSchema<
    serializers.ListStoreCartsEcommerceResponse.Raw,
    Mailchimp.ListStoreCartsEcommerceResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListStoreCartsEcommerceResponseLinksItem).optional(),
    ),
    carts: core.serialization.list(ECommerceCart).optional(),
    storeId: core.serialization.property("store_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListStoreCartsEcommerceResponse {
    export interface Raw {
        _links?: ListStoreCartsEcommerceResponseLinksItem.Raw[] | null;
        carts?: ECommerceCart.Raw[] | null;
        store_id?: string | null;
        total_items?: number | null;
    }
}
