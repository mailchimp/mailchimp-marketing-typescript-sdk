//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { MemberNotes } from "../../../types/MemberNotes.js";
import { ListMemberNotesListsResponseLinksItem } from "./ListMemberNotesListsResponseLinksItem.js";

export const ListMemberNotesListsResponse: core.serialization.ObjectSchema<
    serializers.ListMemberNotesListsResponse.Raw,
    Mailchimp.ListMemberNotesListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListMemberNotesListsResponseLinksItem).optional(),
    ),
    emailId: core.serialization.property("email_id", core.serialization.string().optional()),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    notes: core.serialization.list(MemberNotes).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListMemberNotesListsResponse {
    export interface Raw {
        _links?: ListMemberNotesListsResponseLinksItem.Raw[] | null;
        email_id?: string | null;
        list_id?: string | null;
        notes?: MemberNotes.Raw[] | null;
        total_items?: number | null;
    }
}
