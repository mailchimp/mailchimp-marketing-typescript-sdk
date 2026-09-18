//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateMemberListsRequestStatus: core.serialization.Schema<
    serializers.UpdateMemberListsRequestStatus.Raw,
    Mailchimp.UpdateMemberListsRequestStatus
> = core.serialization.enum_(["subscribed", "unsubscribed", "cleaned", "pending", "transactional"]);

export declare namespace UpdateMemberListsRequestStatus {
    export type Raw = "subscribed" | "unsubscribed" | "cleaned" | "pending" | "transactional";
}
