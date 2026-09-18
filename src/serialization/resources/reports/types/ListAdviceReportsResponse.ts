//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListAdviceReportsResponseAdviceItem } from "./ListAdviceReportsResponseAdviceItem.js";
import { ListAdviceReportsResponseLinksItem } from "./ListAdviceReportsResponseLinksItem.js";

export const ListAdviceReportsResponse: core.serialization.ObjectSchema<
    serializers.ListAdviceReportsResponse.Raw,
    Mailchimp.ListAdviceReportsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListAdviceReportsResponseLinksItem).optional(),
    ),
    advice: core.serialization.list(ListAdviceReportsResponseAdviceItem).optional(),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListAdviceReportsResponse {
    export interface Raw {
        _links?: ListAdviceReportsResponseLinksItem.Raw[] | null;
        advice?: ListAdviceReportsResponseAdviceItem.Raw[] | null;
        campaign_id?: string | null;
        total_items?: number | null;
    }
}
