//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListMemberEventsListsResponseEventsItem: core.serialization.ObjectSchema<
    serializers.ListMemberEventsListsResponseEventsItem.Raw,
    Mailchimp.ListMemberEventsListsResponseEventsItem
> = core.serialization.object({
    name: core.serialization.string().optional(),
    occurredAt: core.serialization.property("occurred_at", core.serialization.date().optional()),
    properties: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
});

export declare namespace ListMemberEventsListsResponseEventsItem {
    export interface Raw {
        name?: string | null;
        occurred_at?: string | null;
        properties?: Record<string, string> | null;
    }
}
