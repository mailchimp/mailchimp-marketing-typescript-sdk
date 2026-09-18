//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CampaignReport } from "../../../types/CampaignReport.js";
import { ListSubReportsReportsResponseLinksItem } from "./ListSubReportsReportsResponseLinksItem.js";

export const ListSubReportsReportsResponse: core.serialization.ObjectSchema<
    serializers.ListSubReportsReportsResponse.Raw,
    Mailchimp.ListSubReportsReportsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListSubReportsReportsResponseLinksItem).optional(),
    ),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    reports: core.serialization.list(CampaignReport).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListSubReportsReportsResponse {
    export interface Raw {
        _links?: ListSubReportsReportsResponseLinksItem.Raw[] | null;
        campaign_id?: string | null;
        reports?: CampaignReport.Raw[] | null;
        total_items?: number | null;
    }
}
