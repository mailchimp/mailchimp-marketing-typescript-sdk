//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ListMembersSmsSubscriptionStatus: core.serialization.Schema<
    serializers.ListMembersSmsSubscriptionStatus.Raw,
    Mailchimp.ListMembersSmsSubscriptionStatus
> = core.serialization.enum_(["subscribed", "unsubscribed", "nonsubscribed", "pending"]);

export declare namespace ListMembersSmsSubscriptionStatus {
    export type Raw = "subscribed" | "unsubscribed" | "nonsubscribed" | "pending";
}
