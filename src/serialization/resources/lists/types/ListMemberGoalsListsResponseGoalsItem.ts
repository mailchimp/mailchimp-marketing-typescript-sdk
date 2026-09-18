//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListMemberGoalsListsResponseGoalsItem: core.serialization.ObjectSchema<
    serializers.ListMemberGoalsListsResponseGoalsItem.Raw,
    Mailchimp.ListMemberGoalsListsResponseGoalsItem
> = core.serialization.object({
    data: core.serialization.string().optional(),
    event: core.serialization.string().optional(),
    goalId: core.serialization.property("goal_id", core.serialization.number().optional()),
    lastVisitedAt: core.serialization.property("last_visited_at", core.serialization.date().optional()),
});

export declare namespace ListMemberGoalsListsResponseGoalsItem {
    export interface Raw {
        data?: string | null;
        event?: string | null;
        goal_id?: number | null;
        last_visited_at?: string | null;
    }
}
