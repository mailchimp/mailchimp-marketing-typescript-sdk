//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { Unsubscribes } from "../../../types/Unsubscribes.js";
import { ListUnsubscribedReportsResponseLinksItem } from "./ListUnsubscribedReportsResponseLinksItem.js";

export const ListUnsubscribedReportsResponse: core.serialization.ObjectSchema<
    serializers.ListUnsubscribedReportsResponse.Raw,
    Mailchimp.ListUnsubscribedReportsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListUnsubscribedReportsResponseLinksItem).optional(),
    ),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
    unsubscribes: core.serialization.list(Unsubscribes).optional(),
});

export declare namespace ListUnsubscribedReportsResponse {
    export interface Raw {
        _links?: ListUnsubscribedReportsResponseLinksItem.Raw[] | null;
        campaign_id?: string | null;
        total_items?: number | null;
        unsubscribes?: Unsubscribes.Raw[] | null;
    }
}
