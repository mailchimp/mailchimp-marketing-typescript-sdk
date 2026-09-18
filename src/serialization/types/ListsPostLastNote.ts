//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ListsPostLastNote: core.serialization.ObjectSchema<
    serializers.ListsPostLastNote.Raw,
    Mailchimp.ListsPostLastNote
> = core.serialization.object({
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
    note: core.serialization.string().optional(),
    noteId: core.serialization.property("note_id", core.serialization.number().optional()),
});

export declare namespace ListsPostLastNote {
    export interface Raw {
        created_at?: string | null;
        created_by?: string | null;
        note?: string | null;
        note_id?: number | null;
    }
}
