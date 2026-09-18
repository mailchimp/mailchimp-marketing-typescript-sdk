//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ClickDetailReport } from "../../../types/ClickDetailReport.js";
import { ListClickDetailsReportsResponseLinksItem } from "./ListClickDetailsReportsResponseLinksItem.js";

export const ListClickDetailsReportsResponse: core.serialization.ObjectSchema<
    serializers.ListClickDetailsReportsResponse.Raw,
    Mailchimp.ListClickDetailsReportsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListClickDetailsReportsResponseLinksItem).optional(),
    ),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
    urlsClicked: core.serialization.property("urls_clicked", core.serialization.list(ClickDetailReport).optional()),
});

export declare namespace ListClickDetailsReportsResponse {
    export interface Raw {
        _links?: ListClickDetailsReportsResponseLinksItem.Raw[] | null;
        campaign_id?: string | null;
        total_items?: number | null;
        urls_clicked?: ClickDetailReport.Raw[] | null;
    }
}
