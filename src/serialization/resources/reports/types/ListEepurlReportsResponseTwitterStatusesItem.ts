//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListEepurlReportsResponseTwitterStatusesItem: core.serialization.ObjectSchema<
    serializers.ListEepurlReportsResponseTwitterStatusesItem.Raw,
    Mailchimp.ListEepurlReportsResponseTwitterStatusesItem
> = core.serialization.object({
    datetime: core.serialization.date().optional(),
    isRetweet: core.serialization.property("is_retweet", core.serialization.boolean().optional()),
    screenName: core.serialization.property("screen_name", core.serialization.string().optional()),
    status: core.serialization.string().optional(),
    statusId: core.serialization.property("status_id", core.serialization.string().optional()),
});

export declare namespace ListEepurlReportsResponseTwitterStatusesItem {
    export interface Raw {
        datetime?: string | null;
        is_retweet?: boolean | null;
        screen_name?: string | null;
        status?: string | null;
        status_id?: string | null;
    }
}
