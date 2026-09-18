//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListMemberNotesListsRequestSortDir: core.serialization.Schema<
    serializers.ListMemberNotesListsRequestSortDir.Raw,
    Mailchimp.ListMemberNotesListsRequestSortDir
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ListMemberNotesListsRequestSortDir {
    export type Raw = "ASC" | "DESC";
}
