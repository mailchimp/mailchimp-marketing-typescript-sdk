//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentType } from "./SegmentType.js";

export const AutomationWorkflowRecipients: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowRecipients.Raw,
    Mailchimp.AutomationWorkflowRecipients
> = core.serialization.object({
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    listIsActive: core.serialization.property("list_is_active", core.serialization.boolean().optional()),
    listName: core.serialization.property("list_name", core.serialization.string().optional()),
    segmentOpts: core.serialization.property("segment_opts", SegmentType.optional()),
    storeId: core.serialization.property("store_id", core.serialization.string().optional()),
});

export declare namespace AutomationWorkflowRecipients {
    export interface Raw {
        list_id?: string | null;
        list_is_active?: boolean | null;
        list_name?: string | null;
        segment_opts?: SegmentType.Raw | null;
        store_id?: string | null;
    }
}
