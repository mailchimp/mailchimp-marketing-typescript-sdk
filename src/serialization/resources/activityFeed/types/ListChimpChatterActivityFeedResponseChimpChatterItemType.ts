//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListChimpChatterActivityFeedResponseChimpChatterItemType: core.serialization.Schema<
    serializers.ListChimpChatterActivityFeedResponseChimpChatterItemType.Raw,
    Mailchimp.ListChimpChatterActivityFeedResponseChimpChatterItemType
> = core.serialization.enum_([
    "lists:new-subscriber",
    "lists:unsubscribes",
    "lists:profile-updates",
    "campaigns:facebook-likes",
    "campaigns:forward-to-friend",
    "lists:imports",
]);

export declare namespace ListChimpChatterActivityFeedResponseChimpChatterItemType {
    export type Raw =
        | "lists:new-subscriber"
        | "lists:unsubscribes"
        | "lists:profile-updates"
        | "campaigns:facebook-likes"
        | "campaigns:forward-to-friend"
        | "lists:imports";
}
