//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const UpdateMemberNoteListsRequest: core.serialization.Schema<
    serializers.UpdateMemberNoteListsRequest.Raw,
    Omit<Mailchimp.UpdateMemberNoteListsRequest, "listId" | "subscriberHash" | "noteId">
> = core.serialization.object({
    note: core.serialization.string().optional(),
});

export declare namespace UpdateMemberNoteListsRequest {
    export interface Raw {
        note?: string | null;
    }
}
