//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListFacebookAdsReportingRequestSortField: core.serialization.Schema<
    serializers.ListFacebookAdsReportingRequestSortField.Raw,
    Mailchimp.ListFacebookAdsReportingRequestSortField
> = core.serialization.enum_(["created_at", "updated_at", "end_time"]);

export declare namespace ListFacebookAdsReportingRequestSortField {
    export type Raw = "created_at" | "updated_at" | "end_time";
}
