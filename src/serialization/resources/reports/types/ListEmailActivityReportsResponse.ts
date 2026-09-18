//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { EmailActivity } from "../../../types/EmailActivity.js";
import { ListEmailActivityReportsResponseLinksItem } from "./ListEmailActivityReportsResponseLinksItem.js";

export const ListEmailActivityReportsResponse: core.serialization.ObjectSchema<
    serializers.ListEmailActivityReportsResponse.Raw,
    Mailchimp.ListEmailActivityReportsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListEmailActivityReportsResponseLinksItem).optional(),
    ),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    emails: core.serialization.list(EmailActivity).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListEmailActivityReportsResponse {
    export interface Raw {
        _links?: ListEmailActivityReportsResponseLinksItem.Raw[] | null;
        campaign_id?: string | null;
        emails?: EmailActivity.Raw[] | null;
        total_items?: number | null;
    }
}
