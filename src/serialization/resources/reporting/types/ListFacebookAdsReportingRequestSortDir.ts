//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListFacebookAdsReportingRequestSortDir: core.serialization.Schema<
    serializers.ListFacebookAdsReportingRequestSortDir.Raw,
    Mailchimp.ListFacebookAdsReportingRequestSortDir
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ListFacebookAdsReportingRequestSortDir {
    export type Raw = "ASC" | "DESC";
}
