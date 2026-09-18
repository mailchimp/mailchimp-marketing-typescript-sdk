//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListMembersListsRequestStatus: core.serialization.Schema<
    serializers.ListMembersListsRequestStatus.Raw,
    Mailchimp.ListMembersListsRequestStatus
> = core.serialization.enum_(["subscribed", "unsubscribed", "cleaned", "pending", "transactional", "archived"]);

export declare namespace ListMembersListsRequestStatus {
    export type Raw = "subscribed" | "unsubscribed" | "cleaned" | "pending" | "transactional" | "archived";
}
