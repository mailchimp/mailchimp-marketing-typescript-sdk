//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ClickDetailMember } from "../../../types/ClickDetailMember.js";
import { ListClickDetailMembersReportsResponseLinksItem } from "./ListClickDetailMembersReportsResponseLinksItem.js";

export const ListClickDetailMembersReportsResponse: core.serialization.ObjectSchema<
    serializers.ListClickDetailMembersReportsResponse.Raw,
    Mailchimp.ListClickDetailMembersReportsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListClickDetailMembersReportsResponseLinksItem).optional(),
    ),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    members: core.serialization.list(ClickDetailMember).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListClickDetailMembersReportsResponse {
    export interface Raw {
        _links?: ListClickDetailMembersReportsResponseLinksItem.Raw[] | null;
        campaign_id?: string | null;
        members?: ClickDetailMember.Raw[] | null;
        total_items?: number | null;
    }
}
