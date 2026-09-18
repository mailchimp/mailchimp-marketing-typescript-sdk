//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListMemberNotesListsRequestSortField: core.serialization.Schema<
    serializers.ListMemberNotesListsRequestSortField.Raw,
    Mailchimp.ListMemberNotesListsRequestSortField
> = core.serialization.enum_(["created_at", "updated_at", "note_id"]);

export declare namespace ListMemberNotesListsRequestSortField {
    export type Raw = "created_at" | "updated_at" | "note_id";
}
