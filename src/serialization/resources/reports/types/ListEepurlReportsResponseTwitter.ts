//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListEepurlReportsResponseTwitterStatusesItem } from "./ListEepurlReportsResponseTwitterStatusesItem.js";

export const ListEepurlReportsResponseTwitter: core.serialization.ObjectSchema<
    serializers.ListEepurlReportsResponseTwitter.Raw,
    Mailchimp.ListEepurlReportsResponseTwitter
> = core.serialization.object({
    firstTweet: core.serialization.property("first_tweet", core.serialization.string().optional()),
    lastTweet: core.serialization.property("last_tweet", core.serialization.string().optional()),
    retweets: core.serialization.number().optional(),
    statuses: core.serialization.list(ListEepurlReportsResponseTwitterStatusesItem).optional(),
    tweets: core.serialization.number().optional(),
});

export declare namespace ListEepurlReportsResponseTwitter {
    export interface Raw {
        first_tweet?: string | null;
        last_tweet?: string | null;
        retweets?: number | null;
        statuses?: ListEepurlReportsResponseTwitterStatusesItem.Raw[] | null;
        tweets?: number | null;
    }
}
