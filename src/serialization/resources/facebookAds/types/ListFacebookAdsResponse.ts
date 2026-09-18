//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { FacebookAds } from "../../../types/FacebookAds.js";
import { ListFacebookAdsResponseLinksItem } from "./ListFacebookAdsResponseLinksItem.js";

export const ListFacebookAdsResponse: core.serialization.ObjectSchema<
    serializers.ListFacebookAdsResponse.Raw,
    Mailchimp.ListFacebookAdsResponse
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ListFacebookAdsResponseLinksItem).optional()),
    facebookAds: core.serialization.property("facebook_ads", core.serialization.list(FacebookAds).optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListFacebookAdsResponse {
    export interface Raw {
        _links?: ListFacebookAdsResponseLinksItem.Raw[] | null;
        facebook_ads?: FacebookAds.Raw[] | null;
        total_items?: number | null;
    }
}
