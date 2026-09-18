//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { AbuseComplaint } from "../../../types/AbuseComplaint.js";
import { ListAbuseReportsReportsResponseLinksItem } from "./ListAbuseReportsReportsResponseLinksItem.js";

export const ListAbuseReportsReportsResponse: core.serialization.ObjectSchema<
    serializers.ListAbuseReportsReportsResponse.Raw,
    Mailchimp.ListAbuseReportsReportsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListAbuseReportsReportsResponseLinksItem).optional(),
    ),
    abuseReports: core.serialization.property("abuse_reports", core.serialization.list(AbuseComplaint).optional()),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListAbuseReportsReportsResponse {
    export interface Raw {
        _links?: ListAbuseReportsReportsResponseLinksItem.Raw[] | null;
        abuse_reports?: AbuseComplaint.Raw[] | null;
        campaign_id?: string | null;
        total_items?: number | null;
    }
}
