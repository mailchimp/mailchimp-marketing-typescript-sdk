//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ListsPostLastNote } from "./ListsPostLastNote.js";
import { ListsPostLinksItem } from "./ListsPostLinksItem.js";
import { ListsPostLocation } from "./ListsPostLocation.js";
import { ListsPostStats } from "./ListsPostStats.js";
import { ListsPostStatus } from "./ListsPostStatus.js";
import { ListsPostTagsItem } from "./ListsPostTagsItem.js";

export const ListsPost: core.serialization.ObjectSchema<serializers.ListsPost.Raw, Mailchimp.ListsPost> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(ListsPostLinksItem).optional()),
        contactId: core.serialization.property("contact_id", core.serialization.string().optional()),
        emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
        emailClient: core.serialization.property("email_client", core.serialization.string().optional()),
        emailType: core.serialization.property("email_type", core.serialization.string().optional()),
        id: core.serialization.string().optional(),
        interests: core.serialization.record(core.serialization.string(), core.serialization.boolean()).optional(),
        ipOpt: core.serialization.property("ip_opt", core.serialization.string().optional()),
        ipSignup: core.serialization.property("ip_signup", core.serialization.string().optional()),
        language: core.serialization.string().optional(),
        lastChanged: core.serialization.property("last_changed", core.serialization.date().optional()),
        lastNote: core.serialization.property("last_note", ListsPostLastNote.optional()),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        location: ListsPostLocation.optional(),
        memberRating: core.serialization.property("member_rating", core.serialization.number().optional()),
        mergeFields: core.serialization.property(
            "merge_fields",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        ),
        stats: ListsPostStats.optional(),
        status: ListsPostStatus.optional(),
        tags: core.serialization.list(ListsPostTagsItem).optional(),
        tagsCount: core.serialization.property("tags_count", core.serialization.number().optional()),
        timestampOpt: core.serialization.property("timestamp_opt", core.serialization.date().optional()),
        timestampSignup: core.serialization.property("timestamp_signup", core.serialization.date().optional()),
        uniqueEmailId: core.serialization.property("unique_email_id", core.serialization.string().optional()),
        vip: core.serialization.boolean().optional(),
    });

export declare namespace ListsPost {
    export interface Raw {
        _links?: ListsPostLinksItem.Raw[] | null;
        contact_id?: string | null;
        email_address?: string | null;
        email_client?: string | null;
        email_type?: string | null;
        id?: string | null;
        interests?: Record<string, boolean> | null;
        ip_opt?: string | null;
        ip_signup?: string | null;
        language?: string | null;
        last_changed?: string | null;
        last_note?: ListsPostLastNote.Raw | null;
        list_id?: string | null;
        location?: ListsPostLocation.Raw | null;
        member_rating?: number | null;
        merge_fields?: Record<string, unknown> | null;
        stats?: ListsPostStats.Raw | null;
        status?: ListsPostStatus.Raw | null;
        tags?: ListsPostTagsItem.Raw[] | null;
        tags_count?: number | null;
        timestamp_opt?: string | null;
        timestamp_signup?: string | null;
        unique_email_id?: string | null;
        vip?: boolean | null;
    }
}
