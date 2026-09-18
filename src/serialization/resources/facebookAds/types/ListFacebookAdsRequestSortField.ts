//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListFacebookAdsRequestSortField: core.serialization.Schema<
    serializers.ListFacebookAdsRequestSortField.Raw,
    Mailchimp.ListFacebookAdsRequestSortField
> = core.serialization.enum_(["created_at", "updated_at", "end_time"]);

export declare namespace ListFacebookAdsRequestSortField {
    export type Raw = "created_at" | "updated_at" | "end_time";
}
