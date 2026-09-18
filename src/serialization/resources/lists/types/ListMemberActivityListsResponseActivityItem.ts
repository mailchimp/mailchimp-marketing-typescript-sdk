//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListMemberActivityListsResponseActivityItem: core.serialization.ObjectSchema<
    serializers.ListMemberActivityListsResponseActivityItem.Raw,
    Mailchimp.ListMemberActivityListsResponseActivityItem
> = core.serialization.object({
    action: core.serialization.string().optional(),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    parentCampaign: core.serialization.property("parent_campaign", core.serialization.string().optional()),
    timestamp: core.serialization.date().optional(),
    title: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
});

export declare namespace ListMemberActivityListsResponseActivityItem {
    export interface Raw {
        action?: string | null;
        campaign_id?: string | null;
        parent_campaign?: string | null;
        timestamp?: string | null;
        title?: string | null;
        type?: string | null;
        url?: string | null;
    }
}
