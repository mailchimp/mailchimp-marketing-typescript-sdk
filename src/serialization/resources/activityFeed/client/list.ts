//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListActivityFeedResponseItem } from "../types/ListActivityFeedResponseItem.js";

export const Response: core.serialization.Schema<
    serializers.activityFeed.list.Response.Raw,
    Mailchimp.ListActivityFeedResponseItem[]
> = core.serialization.list(ListActivityFeedResponseItem);

export declare namespace Response {
    export type Raw = ListActivityFeedResponseItem.Raw[];
}
