//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ECommerceStore } from "../../../types/ECommerceStore.js";
import { ListStoresEcommerceResponseLinksItem } from "./ListStoresEcommerceResponseLinksItem.js";

export const ListStoresEcommerceResponse: core.serialization.ObjectSchema<
    serializers.ListStoresEcommerceResponse.Raw,
    Mailchimp.ListStoresEcommerceResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListStoresEcommerceResponseLinksItem).optional(),
    ),
    stores: core.serialization.list(ECommerceStore).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListStoresEcommerceResponse {
    export interface Raw {
        _links?: ListStoresEcommerceResponseLinksItem.Raw[] | null;
        stores?: ECommerceStore.Raw[] | null;
        total_items?: number | null;
    }
}
