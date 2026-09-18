//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListEcommerceProductActivityReportsResponseLinksItem } from "./ListEcommerceProductActivityReportsResponseLinksItem.js";
import { ListEcommerceProductActivityReportsResponseProductsItem } from "./ListEcommerceProductActivityReportsResponseProductsItem.js";

export const ListEcommerceProductActivityReportsResponse: core.serialization.ObjectSchema<
    serializers.ListEcommerceProductActivityReportsResponse.Raw,
    Mailchimp.ListEcommerceProductActivityReportsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListEcommerceProductActivityReportsResponseLinksItem).optional(),
    ),
    products: core.serialization.list(ListEcommerceProductActivityReportsResponseProductsItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListEcommerceProductActivityReportsResponse {
    export interface Raw {
        _links?: ListEcommerceProductActivityReportsResponseLinksItem.Raw[] | null;
        products?: ListEcommerceProductActivityReportsResponseProductsItem.Raw[] | null;
        total_items?: number | null;
    }
}
