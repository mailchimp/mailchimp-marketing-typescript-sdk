//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ECommerceCustomer } from "../../../types/ECommerceCustomer.js";
import { ListStoreCustomersEcommerceResponseLinksItem } from "./ListStoreCustomersEcommerceResponseLinksItem.js";

export const ListStoreCustomersEcommerceResponse: core.serialization.ObjectSchema<
    serializers.ListStoreCustomersEcommerceResponse.Raw,
    Mailchimp.ListStoreCustomersEcommerceResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListStoreCustomersEcommerceResponseLinksItem).optional(),
    ),
    customers: core.serialization.list(ECommerceCustomer).optional(),
    storeId: core.serialization.property("store_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListStoreCustomersEcommerceResponse {
    export interface Raw {
        _links?: ListStoreCustomersEcommerceResponseLinksItem.Raw[] | null;
        customers?: ECommerceCustomer.Raw[] | null;
        store_id?: string | null;
        total_items?: number | null;
    }
}
