//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateMemberEventListsRequest: core.serialization.Schema<
    serializers.CreateMemberEventListsRequest.Raw,
    Omit<Mailchimp.CreateMemberEventListsRequest, "listId" | "subscriberHash">
> = core.serialization.object({
    isSyncing: core.serialization.property("is_syncing", core.serialization.boolean().optional()),
    name: core.serialization.string(),
    occurredAt: core.serialization.property("occurred_at", core.serialization.date().optional()),
    properties: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
});

export declare namespace CreateMemberEventListsRequest {
    export interface Raw {
        is_syncing?: boolean | null;
        name: string;
        occurred_at?: string | null;
        properties?: Record<string, string> | null;
    }
}
