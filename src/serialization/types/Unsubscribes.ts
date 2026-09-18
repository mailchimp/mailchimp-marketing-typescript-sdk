//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { UnsubscribesLinksItem } from "./UnsubscribesLinksItem.js";
import { UnsubscribesMergeFieldsValue } from "./UnsubscribesMergeFieldsValue.js";

export const Unsubscribes: core.serialization.ObjectSchema<serializers.Unsubscribes.Raw, Mailchimp.Unsubscribes> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(UnsubscribesLinksItem).optional()),
        campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
        emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
        emailId: core.serialization.property("email_id", core.serialization.string().optional()),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        listIsActive: core.serialization.property("list_is_active", core.serialization.boolean().optional()),
        mergeFields: core.serialization.property(
            "merge_fields",
            core.serialization.record(core.serialization.string(), UnsubscribesMergeFieldsValue).optional(),
        ),
        reason: core.serialization.string().optional(),
        timestamp: core.serialization.date().optional(),
        vip: core.serialization.boolean().optional(),
    });

export declare namespace Unsubscribes {
    export interface Raw {
        _links?: UnsubscribesLinksItem.Raw[] | null;
        campaign_id?: string | null;
        email_address?: string | null;
        email_id?: string | null;
        list_id?: string | null;
        list_is_active?: boolean | null;
        merge_fields?: Record<string, UnsubscribesMergeFieldsValue.Raw> | null;
        reason?: string | null;
        timestamp?: string | null;
        vip?: boolean | null;
    }
}
