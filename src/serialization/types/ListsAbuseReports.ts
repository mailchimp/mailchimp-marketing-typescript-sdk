//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ListsAbuseReportsLinksItem } from "./ListsAbuseReportsLinksItem.js";
import { ListsAbuseReportsMergeFieldsValue } from "./ListsAbuseReportsMergeFieldsValue.js";

export const ListsAbuseReports: core.serialization.ObjectSchema<
    serializers.ListsAbuseReports.Raw,
    Mailchimp.ListsAbuseReports
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ListsAbuseReportsLinksItem).optional()),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    date: core.serialization.string().optional(),
    emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
    emailId: core.serialization.property("email_id", core.serialization.string().optional()),
    id: core.serialization.number().optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    mergeFields: core.serialization.property(
        "merge_fields",
        core.serialization.record(core.serialization.string(), ListsAbuseReportsMergeFieldsValue).optional(),
    ),
    vip: core.serialization.boolean().optional(),
});

export declare namespace ListsAbuseReports {
    export interface Raw {
        _links?: ListsAbuseReportsLinksItem.Raw[] | null;
        campaign_id?: string | null;
        date?: string | null;
        email_address?: string | null;
        email_id?: string | null;
        id?: number | null;
        list_id?: string | null;
        merge_fields?: Record<string, ListsAbuseReportsMergeFieldsValue.Raw> | null;
        vip?: boolean | null;
    }
}
