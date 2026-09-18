//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListFacebookAdEcommerceProductActivityReportingRequestSortField: core.serialization.Schema<
    serializers.ListFacebookAdEcommerceProductActivityReportingRequestSortField.Raw,
    Mailchimp.ListFacebookAdEcommerceProductActivityReportingRequestSortField
> = core.serialization.enum_(["title", "total_revenue", "total_purchased"]);

export declare namespace ListFacebookAdEcommerceProductActivityReportingRequestSortField {
    export type Raw = "title" | "total_revenue" | "total_purchased";
}
