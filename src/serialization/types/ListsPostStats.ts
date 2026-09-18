//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ListsPostStats: core.serialization.ObjectSchema<serializers.ListsPostStats.Raw, Mailchimp.ListsPostStats> =
    core.serialization.object({
        avgClickRate: core.serialization.property("avg_click_rate", core.serialization.number().optional()),
        avgOpenRate: core.serialization.property("avg_open_rate", core.serialization.number().optional()),
    });

export declare namespace ListsPostStats {
    export interface Raw {
        avg_click_rate?: number | null;
        avg_open_rate?: number | null;
    }
}
