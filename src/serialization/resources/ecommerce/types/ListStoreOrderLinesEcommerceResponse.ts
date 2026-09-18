//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ECommerceOrderLineItem } from "../../../types/ECommerceOrderLineItem.js";
import { ListStoreOrderLinesEcommerceResponseLinksItem } from "./ListStoreOrderLinesEcommerceResponseLinksItem.js";

export const ListStoreOrderLinesEcommerceResponse: core.serialization.ObjectSchema<
    serializers.ListStoreOrderLinesEcommerceResponse.Raw,
    Mailchimp.ListStoreOrderLinesEcommerceResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListStoreOrderLinesEcommerceResponseLinksItem).optional(),
    ),
    lines: core.serialization.list(ECommerceOrderLineItem).optional(),
    orderId: core.serialization.property("order_id", core.serialization.string().optional()),
    storeId: core.serialization.property("store_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListStoreOrderLinesEcommerceResponse {
    export interface Raw {
        _links?: ListStoreOrderLinesEcommerceResponseLinksItem.Raw[] | null;
        lines?: ECommerceOrderLineItem.Raw[] | null;
        order_id?: string | null;
        store_id?: string | null;
        total_items?: number | null;
    }
}
