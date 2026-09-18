//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ListMembersLastNote } from "./ListMembersLastNote.js";
import { ListMembersLinksItem } from "./ListMembersLinksItem.js";
import { ListMembersLocation } from "./ListMembersLocation.js";
import { ListMembersMarketingPermissionsItem } from "./ListMembersMarketingPermissionsItem.js";
import { ListMembersMergeFieldsValue } from "./ListMembersMergeFieldsValue.js";
import { ListMembersSmsSubscriptionStatus } from "./ListMembersSmsSubscriptionStatus.js";
import { ListMembersStats } from "./ListMembersStats.js";
import { ListMembersStatus } from "./ListMembersStatus.js";
import { ListMembersTagsItem } from "./ListMembersTagsItem.js";

export const ListMembers: core.serialization.ObjectSchema<serializers.ListMembers.Raw, Mailchimp.ListMembers> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(ListMembersLinksItem).optional()),
        consentsToOneToOneMessaging: core.serialization.property(
            "consents_to_one_to_one_messaging",
            core.serialization.boolean().optional(),
        ),
        contactId: core.serialization.property("contact_id", core.serialization.string().optional()),
        emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
        emailClient: core.serialization.property("email_client", core.serialization.string().optional()),
        emailType: core.serialization.property("email_type", core.serialization.unknown().optional()),
        id: core.serialization.string().optional(),
        interests: core.serialization.record(core.serialization.string(), core.serialization.boolean()).optional(),
        ipOpt: core.serialization.property("ip_opt", core.serialization.string().optional()),
        ipSignup: core.serialization.property("ip_signup", core.serialization.string().optional()),
        language: core.serialization.string().optional(),
        lastChanged: core.serialization.property("last_changed", core.serialization.date().optional()),
        lastNote: core.serialization.property("last_note", ListMembersLastNote.optional()),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        location: ListMembersLocation.optional(),
        marketingPermissions: core.serialization.property(
            "marketing_permissions",
            core.serialization.list(ListMembersMarketingPermissionsItem).optional(),
        ),
        memberRating: core.serialization.property("member_rating", core.serialization.number().optional()),
        mergeFields: core.serialization.property(
            "merge_fields",
            core.serialization.record(core.serialization.string(), ListMembersMergeFieldsValue).optional(),
        ),
        smsPhoneNumber: core.serialization.property("sms_phone_number", core.serialization.string().optional()),
        smsSubscriptionLastUpdated: core.serialization.property(
            "sms_subscription_last_updated",
            core.serialization.string().optional(),
        ),
        smsSubscriptionStatus: core.serialization.property(
            "sms_subscription_status",
            ListMembersSmsSubscriptionStatus.optional(),
        ),
        source: core.serialization.string().optional(),
        stats: ListMembersStats.optional(),
        status: ListMembersStatus.optional(),
        tags: core.serialization.list(ListMembersTagsItem).optional(),
        tagsCount: core.serialization.property("tags_count", core.serialization.number().optional()),
        timestampOpt: core.serialization.property("timestamp_opt", core.serialization.date().optional()),
        timestampSignup: core.serialization.property("timestamp_signup", core.serialization.date().optional()),
        uniqueEmailId: core.serialization.property("unique_email_id", core.serialization.string().optional()),
        unsubscribeReason: core.serialization.property("unsubscribe_reason", core.serialization.string().optional()),
        vip: core.serialization.boolean().optional(),
        webId: core.serialization.property("web_id", core.serialization.number().optional()),
    });

export declare namespace ListMembers {
    export interface Raw {
        _links?: ListMembersLinksItem.Raw[] | null;
        consents_to_one_to_one_messaging?: boolean | null;
        contact_id?: string | null;
        email_address?: string | null;
        email_client?: string | null;
        email_type?: unknown | null;
        id?: string | null;
        interests?: Record<string, boolean> | null;
        ip_opt?: string | null;
        ip_signup?: string | null;
        language?: string | null;
        last_changed?: string | null;
        last_note?: ListMembersLastNote.Raw | null;
        list_id?: string | null;
        location?: ListMembersLocation.Raw | null;
        marketing_permissions?: ListMembersMarketingPermissionsItem.Raw[] | null;
        member_rating?: number | null;
        merge_fields?: Record<string, ListMembersMergeFieldsValue.Raw> | null;
        sms_phone_number?: string | null;
        sms_subscription_last_updated?: string | null;
        sms_subscription_status?: ListMembersSmsSubscriptionStatus.Raw | null;
        source?: string | null;
        stats?: ListMembersStats.Raw | null;
        status?: ListMembersStatus.Raw | null;
        tags?: ListMembersTagsItem.Raw[] | null;
        tags_count?: number | null;
        timestamp_opt?: string | null;
        timestamp_signup?: string | null;
        unique_email_id?: string | null;
        unsubscribe_reason?: string | null;
        vip?: boolean | null;
        web_id?: number | null;
    }
}
