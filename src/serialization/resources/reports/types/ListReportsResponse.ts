//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CampaignReport } from "../../../types/CampaignReport.js";
import { ListReportsResponseLinksItem } from "./ListReportsResponseLinksItem.js";

export const ListReportsResponse: core.serialization.ObjectSchema<
    serializers.ListReportsResponse.Raw,
    Mailchimp.ListReportsResponse
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ListReportsResponseLinksItem).optional()),
    reports: core.serialization.list(CampaignReport).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListReportsResponse {
    export interface Raw {
        _links?: ListReportsResponseLinksItem.Raw[] | null;
        reports?: CampaignReport.Raw[] | null;
        total_items?: number | null;
    }
}
