//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListListsResponseConstraints: core.serialization.ObjectSchema<
    serializers.ListListsResponseConstraints.Raw,
    Mailchimp.ListListsResponseConstraints
> = core.serialization.object({
    currentTotalInstances: core.serialization.property(
        "current_total_instances",
        core.serialization.number().optional(),
    ),
    maxInstances: core.serialization.property("max_instances", core.serialization.number()),
    mayCreate: core.serialization.property("may_create", core.serialization.boolean()),
});

export declare namespace ListListsResponseConstraints {
    export interface Raw {
        current_total_instances?: number | null;
        max_instances: number;
        may_create: boolean;
    }
}
