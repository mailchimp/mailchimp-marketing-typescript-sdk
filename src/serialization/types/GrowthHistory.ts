//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { GrowthHistoryLinksItem } from "./GrowthHistoryLinksItem.js";

export const GrowthHistory: core.serialization.ObjectSchema<serializers.GrowthHistory.Raw, Mailchimp.GrowthHistory> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(GrowthHistoryLinksItem).optional()),
        cleaned: core.serialization.number().optional(),
        deleted: core.serialization.number().optional(),
        existing: core.serialization.number().optional(),
        imports: core.serialization.number().optional(),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        month: core.serialization.string().optional(),
        optins: core.serialization.number().optional(),
        pending: core.serialization.number().optional(),
        reconfirm: core.serialization.number().optional(),
        subscribed: core.serialization.number().optional(),
        transactional: core.serialization.number().optional(),
        unsubscribed: core.serialization.number().optional(),
    });

export declare namespace GrowthHistory {
    export interface Raw {
        _links?: GrowthHistoryLinksItem.Raw[] | null;
        cleaned?: number | null;
        deleted?: number | null;
        existing?: number | null;
        imports?: number | null;
        list_id?: string | null;
        month?: string | null;
        optins?: number | null;
        pending?: number | null;
        reconfirm?: number | null;
        subscribed?: number | null;
        transactional?: number | null;
        unsubscribed?: number | null;
    }
}
