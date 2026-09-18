//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListsAbuseReports } from "../../../types/ListsAbuseReports.js";
import { ListAbuseReportsListsResponseLinksItem } from "./ListAbuseReportsListsResponseLinksItem.js";

export const ListAbuseReportsListsResponse: core.serialization.ObjectSchema<
    serializers.ListAbuseReportsListsResponse.Raw,
    Mailchimp.ListAbuseReportsListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListAbuseReportsListsResponseLinksItem).optional(),
    ),
    abuseReports: core.serialization.property("abuse_reports", core.serialization.list(ListsAbuseReports).optional()),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListAbuseReportsListsResponse {
    export interface Raw {
        _links?: ListAbuseReportsListsResponseLinksItem.Raw[] | null;
        abuse_reports?: ListsAbuseReports.Raw[] | null;
        list_id?: string | null;
        total_items?: number | null;
    }
}
