//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ECommerceCartLineItem } from "../../../types/ECommerceCartLineItem.js";
import { ListStoreCartLinesEcommerceResponseLinksItem } from "./ListStoreCartLinesEcommerceResponseLinksItem.js";

export const ListStoreCartLinesEcommerceResponse: core.serialization.ObjectSchema<
    serializers.ListStoreCartLinesEcommerceResponse.Raw,
    Mailchimp.ListStoreCartLinesEcommerceResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListStoreCartLinesEcommerceResponseLinksItem).optional(),
    ),
    cartId: core.serialization.property("cart_id", core.serialization.string().optional()),
    lines: core.serialization.list(ECommerceCartLineItem).optional(),
    storeId: core.serialization.property("store_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListStoreCartLinesEcommerceResponse {
    export interface Raw {
        _links?: ListStoreCartLinesEcommerceResponseLinksItem.Raw[] | null;
        cart_id?: string | null;
        lines?: ECommerceCartLineItem.Raw[] | null;
        store_id?: string | null;
        total_items?: number | null;
    }
}
