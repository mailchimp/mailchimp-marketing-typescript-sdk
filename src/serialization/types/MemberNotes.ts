//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { MemberNotesLinksItem } from "./MemberNotesLinksItem.js";

export const MemberNotes: core.serialization.ObjectSchema<serializers.MemberNotes.Raw, Mailchimp.MemberNotes> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(MemberNotesLinksItem).optional()),
        contactId: core.serialization.property("contact_id", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
        emailId: core.serialization.property("email_id", core.serialization.string().optional()),
        id: core.serialization.number().optional(),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        note: core.serialization.string().optional(),
        updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
    });

export declare namespace MemberNotes {
    export interface Raw {
        _links?: MemberNotesLinksItem.Raw[] | null;
        contact_id?: string | null;
        created_at?: string | null;
        created_by?: string | null;
        email_id?: string | null;
        id?: number | null;
        list_id?: string | null;
        note?: string | null;
        updated_at?: string | null;
    }
}
