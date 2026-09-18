//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateMemberNoteListsRequest: core.serialization.Schema<
    serializers.CreateMemberNoteListsRequest.Raw,
    Omit<Mailchimp.CreateMemberNoteListsRequest, "listId" | "subscriberHash">
> = core.serialization.object({
    note: core.serialization.string().optional(),
});

export declare namespace CreateMemberNoteListsRequest {
    export interface Raw {
        note?: string | null;
    }
}
