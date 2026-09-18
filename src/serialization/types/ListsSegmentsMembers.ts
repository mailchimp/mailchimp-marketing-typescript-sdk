//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ListsSegmentsMembersLastNote } from "./ListsSegmentsMembersLastNote.js";
import { ListsSegmentsMembersLinksItem } from "./ListsSegmentsMembersLinksItem.js";
import { ListsSegmentsMembersLocation } from "./ListsSegmentsMembersLocation.js";
import { ListsSegmentsMembersMergeFieldsValue } from "./ListsSegmentsMembersMergeFieldsValue.js";
import { ListsSegmentsMembersStats } from "./ListsSegmentsMembersStats.js";
import { ListsSegmentsMembersStatus } from "./ListsSegmentsMembersStatus.js";

export const ListsSegmentsMembers: core.serialization.ObjectSchema<
    serializers.ListsSegmentsMembers.Raw,
    Mailchimp.ListsSegmentsMembers
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ListsSegmentsMembersLinksItem).optional()),
    emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
    emailClient: core.serialization.property("email_client", core.serialization.string().optional()),
    emailType: core.serialization.property("email_type", core.serialization.string().optional()),
    fullName: core.serialization.property("full_name", core.serialization.string().optional()),
    id: core.serialization.string().optional(),
    interests: core.serialization.record(core.serialization.string(), core.serialization.boolean()).optional(),
    ipOpt: core.serialization.property("ip_opt", core.serialization.string().optional()),
    ipSignup: core.serialization.property("ip_signup", core.serialization.string().optional()),
    language: core.serialization.string().optional(),
    lastChanged: core.serialization.property("last_changed", core.serialization.date().optional()),
    lastNote: core.serialization.property("last_note", ListsSegmentsMembersLastNote.optional()),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    location: ListsSegmentsMembersLocation.optional(),
    memberRating: core.serialization.property("member_rating", core.serialization.number().optional()),
    mergeFields: core.serialization.property(
        "merge_fields",
        core.serialization.record(core.serialization.string(), ListsSegmentsMembersMergeFieldsValue).optional(),
    ),
    stats: ListsSegmentsMembersStats.optional(),
    status: ListsSegmentsMembersStatus.optional(),
    timestampOpt: core.serialization.property("timestamp_opt", core.serialization.date().optional()),
    timestampSignup: core.serialization.property("timestamp_signup", core.serialization.date().optional()),
    uniqueEmailId: core.serialization.property("unique_email_id", core.serialization.string().optional()),
    vip: core.serialization.boolean().optional(),
});

export declare namespace ListsSegmentsMembers {
    export interface Raw {
        _links?: ListsSegmentsMembersLinksItem.Raw[] | null;
        email_address?: string | null;
        email_client?: string | null;
        email_type?: string | null;
        full_name?: string | null;
        id?: string | null;
        interests?: Record<string, boolean> | null;
        ip_opt?: string | null;
        ip_signup?: string | null;
        language?: string | null;
        last_changed?: string | null;
        last_note?: ListsSegmentsMembersLastNote.Raw | null;
        list_id?: string | null;
        location?: ListsSegmentsMembersLocation.Raw | null;
        member_rating?: number | null;
        merge_fields?: Record<string, ListsSegmentsMembersMergeFieldsValue.Raw> | null;
        stats?: ListsSegmentsMembersStats.Raw | null;
        status?: ListsSegmentsMembersStatus.Raw | null;
        timestamp_opt?: string | null;
        timestamp_signup?: string | null;
        unique_email_id?: string | null;
        vip?: boolean | null;
    }
}
