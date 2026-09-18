//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SubscriberListStats: core.serialization.ObjectSchema<
    serializers.SubscriberListStats.Raw,
    Mailchimp.SubscriberListStats
> = core.serialization.object({
    avgSubRate: core.serialization.property("avg_sub_rate", core.serialization.number().optional()),
    avgUnsubRate: core.serialization.property("avg_unsub_rate", core.serialization.number().optional()),
    campaignCount: core.serialization.property("campaign_count", core.serialization.number().optional()),
    campaignLastSent: core.serialization.property("campaign_last_sent", core.serialization.date().optional()),
    cleanedCount: core.serialization.property("cleaned_count", core.serialization.number().optional()),
    cleanedCountSinceSend: core.serialization.property(
        "cleaned_count_since_send",
        core.serialization.number().optional(),
    ),
    clickRate: core.serialization.property("click_rate", core.serialization.number().optional()),
    lastSubDate: core.serialization.property("last_sub_date", core.serialization.date().optional()),
    lastUnsubDate: core.serialization.property("last_unsub_date", core.serialization.date().optional()),
    memberCount: core.serialization.property("member_count", core.serialization.number().optional()),
    memberCountSinceSend: core.serialization.property(
        "member_count_since_send",
        core.serialization.number().optional(),
    ),
    mergeFieldCount: core.serialization.property("merge_field_count", core.serialization.number().optional()),
    openRate: core.serialization.property("open_rate", core.serialization.number().optional()),
    targetSubRate: core.serialization.property("target_sub_rate", core.serialization.number().optional()),
    totalContacts: core.serialization.property("total_contacts", core.serialization.number().optional()),
    unsubscribeCount: core.serialization.property("unsubscribe_count", core.serialization.number().optional()),
    unsubscribeCountSinceSend: core.serialization.property(
        "unsubscribe_count_since_send",
        core.serialization.number().optional(),
    ),
});

export declare namespace SubscriberListStats {
    export interface Raw {
        avg_sub_rate?: number | null;
        avg_unsub_rate?: number | null;
        campaign_count?: number | null;
        campaign_last_sent?: string | null;
        cleaned_count?: number | null;
        cleaned_count_since_send?: number | null;
        click_rate?: number | null;
        last_sub_date?: string | null;
        last_unsub_date?: string | null;
        member_count?: number | null;
        member_count_since_send?: number | null;
        merge_field_count?: number | null;
        open_rate?: number | null;
        target_sub_rate?: number | null;
        total_contacts?: number | null;
        unsubscribe_count?: number | null;
        unsubscribe_count_since_send?: number | null;
    }
}
