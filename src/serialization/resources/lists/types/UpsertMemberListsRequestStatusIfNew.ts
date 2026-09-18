//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpsertMemberListsRequestStatusIfNew: core.serialization.Schema<
    serializers.UpsertMemberListsRequestStatusIfNew.Raw,
    Mailchimp.UpsertMemberListsRequestStatusIfNew
> = core.serialization.enum_(["subscribed", "unsubscribed", "cleaned", "pending", "transactional"]);

export declare namespace UpsertMemberListsRequestStatusIfNew {
    export type Raw = "subscribed" | "unsubscribed" | "cleaned" | "pending" | "transactional";
}
