//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListEepurlReportsResponseClicks } from "./ListEepurlReportsResponseClicks.js";
import { ListEepurlReportsResponseLinksItem } from "./ListEepurlReportsResponseLinksItem.js";
import { ListEepurlReportsResponseReferrersItem } from "./ListEepurlReportsResponseReferrersItem.js";
import { ListEepurlReportsResponseTwitter } from "./ListEepurlReportsResponseTwitter.js";

export const ListEepurlReportsResponse: core.serialization.ObjectSchema<
    serializers.ListEepurlReportsResponse.Raw,
    Mailchimp.ListEepurlReportsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListEepurlReportsResponseLinksItem).optional(),
    ),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    clicks: ListEepurlReportsResponseClicks.optional(),
    eepurl: core.serialization.string().optional(),
    referrers: core.serialization.list(ListEepurlReportsResponseReferrersItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
    twitter: ListEepurlReportsResponseTwitter.optional(),
});

export declare namespace ListEepurlReportsResponse {
    export interface Raw {
        _links?: ListEepurlReportsResponseLinksItem.Raw[] | null;
        campaign_id?: string | null;
        clicks?: ListEepurlReportsResponseClicks.Raw | null;
        eepurl?: string | null;
        referrers?: ListEepurlReportsResponseReferrersItem.Raw[] | null;
        total_items?: number | null;
        twitter?: ListEepurlReportsResponseTwitter.Raw | null;
    }
}
