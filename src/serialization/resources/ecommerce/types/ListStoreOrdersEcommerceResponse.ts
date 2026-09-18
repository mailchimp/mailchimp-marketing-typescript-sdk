//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ECommerceOrder } from "../../../types/ECommerceOrder.js";
import { ListStoreOrdersEcommerceResponseLinksItem } from "./ListStoreOrdersEcommerceResponseLinksItem.js";

export const ListStoreOrdersEcommerceResponse: core.serialization.ObjectSchema<
    serializers.ListStoreOrdersEcommerceResponse.Raw,
    Mailchimp.ListStoreOrdersEcommerceResponse
> = core.serialization.object({
    storeId: core.serialization.property("store_id", core.serialization.string().optional()),
    orders: core.serialization.list(ECommerceOrder).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListStoreOrdersEcommerceResponseLinksItem).optional(),
    ),
});

export declare namespace ListStoreOrdersEcommerceResponse {
    export interface Raw {
        store_id?: string | null;
        orders?: ECommerceOrder.Raw[] | null;
        total_items?: number | null;
        _links?: ListStoreOrdersEcommerceResponseLinksItem.Raw[] | null;
    }
}
