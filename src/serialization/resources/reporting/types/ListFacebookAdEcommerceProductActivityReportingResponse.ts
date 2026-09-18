//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListFacebookAdEcommerceProductActivityReportingResponseLinksItem } from "./ListFacebookAdEcommerceProductActivityReportingResponseLinksItem.js";
import { ListFacebookAdEcommerceProductActivityReportingResponseProductsItem } from "./ListFacebookAdEcommerceProductActivityReportingResponseProductsItem.js";

export const ListFacebookAdEcommerceProductActivityReportingResponse: core.serialization.ObjectSchema<
    serializers.ListFacebookAdEcommerceProductActivityReportingResponse.Raw,
    Mailchimp.ListFacebookAdEcommerceProductActivityReportingResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListFacebookAdEcommerceProductActivityReportingResponseLinksItem).optional(),
    ),
    products: core.serialization.list(ListFacebookAdEcommerceProductActivityReportingResponseProductsItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListFacebookAdEcommerceProductActivityReportingResponse {
    export interface Raw {
        _links?: ListFacebookAdEcommerceProductActivityReportingResponseLinksItem.Raw[] | null;
        products?: ListFacebookAdEcommerceProductActivityReportingResponseProductsItem.Raw[] | null;
        total_items?: number | null;
    }
}
