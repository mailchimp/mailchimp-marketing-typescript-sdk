//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ECommerceOrder } from "../../../types/ECommerceOrder.js";
import { ListOrdersEcommerceResponseLinksItem } from "./ListOrdersEcommerceResponseLinksItem.js";

export const ListOrdersEcommerceResponse: core.serialization.ObjectSchema<
    serializers.ListOrdersEcommerceResponse.Raw,
    Mailchimp.ListOrdersEcommerceResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListOrdersEcommerceResponseLinksItem).optional(),
    ),
    orders: core.serialization.list(ECommerceOrder).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListOrdersEcommerceResponse {
    export interface Raw {
        _links?: ListOrdersEcommerceResponseLinksItem.Raw[] | null;
        orders?: ECommerceOrder.Raw[] | null;
        total_items?: number | null;
    }
}
