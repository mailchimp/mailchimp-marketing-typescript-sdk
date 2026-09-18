//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListChimpChatterActivityFeedResponseChimpChatterItemType } from "./ListChimpChatterActivityFeedResponseChimpChatterItemType.js";

export const ListChimpChatterActivityFeedResponseChimpChatterItem: core.serialization.ObjectSchema<
    serializers.ListChimpChatterActivityFeedResponseChimpChatterItem.Raw,
    Mailchimp.ListChimpChatterActivityFeedResponseChimpChatterItem
> = core.serialization.object({
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    message: core.serialization.string().optional(),
    title: core.serialization.string().optional(),
    type: ListChimpChatterActivityFeedResponseChimpChatterItemType.optional(),
    updateTime: core.serialization.property("update_time", core.serialization.date().optional()),
    url: core.serialization.string().optional(),
});

export declare namespace ListChimpChatterActivityFeedResponseChimpChatterItem {
    export interface Raw {
        campaign_id?: string | null;
        list_id?: string | null;
        message?: string | null;
        title?: string | null;
        type?: ListChimpChatterActivityFeedResponseChimpChatterItemType.Raw | null;
        update_time?: string | null;
        url?: string | null;
    }
}
