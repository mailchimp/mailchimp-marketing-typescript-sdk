//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ReportingFacebookAd } from "../../../types/ReportingFacebookAd.js";
import { ListFacebookAdsReportingResponseLinksItem } from "./ListFacebookAdsReportingResponseLinksItem.js";

export const ListFacebookAdsReportingResponse: core.serialization.ObjectSchema<
    serializers.ListFacebookAdsReportingResponse.Raw,
    Mailchimp.ListFacebookAdsReportingResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListFacebookAdsReportingResponseLinksItem).optional(),
    ),
    facebookAds: core.serialization.property("facebook_ads", core.serialization.list(ReportingFacebookAd).optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListFacebookAdsReportingResponse {
    export interface Raw {
        _links?: ListFacebookAdsReportingResponseLinksItem.Raw[] | null;
        facebook_ads?: ReportingFacebookAd.Raw[] | null;
        total_items?: number | null;
    }
}
