//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListMembersListsRequestSortDir: core.serialization.Schema<
    serializers.ListMembersListsRequestSortDir.Raw,
    Mailchimp.ListMembersListsRequestSortDir
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ListMembersListsRequestSortDir {
    export type Raw = "ASC" | "DESC";
}
