//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { SentTo } from "../../../types/SentTo.js";
import { ListSentToReportsResponseLinksItem } from "./ListSentToReportsResponseLinksItem.js";

export const ListSentToReportsResponse: core.serialization.ObjectSchema<
    serializers.ListSentToReportsResponse.Raw,
    Mailchimp.ListSentToReportsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListSentToReportsResponseLinksItem).optional(),
    ),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    sentTo: core.serialization.property("sent_to", core.serialization.list(SentTo).optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListSentToReportsResponse {
    export interface Raw {
        _links?: ListSentToReportsResponseLinksItem.Raw[] | null;
        campaign_id?: string | null;
        sent_to?: SentTo.Raw[] | null;
        total_items?: number | null;
    }
}
