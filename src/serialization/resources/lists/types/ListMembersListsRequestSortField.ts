//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListMembersListsRequestSortField: core.serialization.Schema<
    serializers.ListMembersListsRequestSortField.Raw,
    Mailchimp.ListMembersListsRequestSortField
> = core.serialization.enum_(["timestamp_opt", "timestamp_signup", "last_changed"]);

export declare namespace ListMembersListsRequestSortField {
    export type Raw = "timestamp_opt" | "timestamp_signup" | "last_changed";
}
