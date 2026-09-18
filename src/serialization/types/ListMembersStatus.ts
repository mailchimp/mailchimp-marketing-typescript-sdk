//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ListMembersStatus: core.serialization.Schema<
    serializers.ListMembersStatus.Raw,
    Mailchimp.ListMembersStatus
> = core.serialization.enum_(["subscribed", "unsubscribed", "cleaned", "pending", "transactional", "archived"]);

export declare namespace ListMembersStatus {
    export type Raw = "subscribed" | "unsubscribed" | "cleaned" | "pending" | "transactional" | "archived";
}
