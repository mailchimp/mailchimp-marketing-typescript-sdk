//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SentToAbsplitGroup } from "./SentToAbsplitGroup.js";
import { SentToLinksItem } from "./SentToLinksItem.js";
import { SentToMergeFieldsValue } from "./SentToMergeFieldsValue.js";
import { SentToStatus } from "./SentToStatus.js";

export const SentTo: core.serialization.ObjectSchema<serializers.SentTo.Raw, Mailchimp.SentTo> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(SentToLinksItem).optional()),
        absplitGroup: core.serialization.property("absplit_group", SentToAbsplitGroup.optional()),
        campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
        emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
        emailId: core.serialization.property("email_id", core.serialization.string().optional()),
        gmtOffset: core.serialization.property("gmt_offset", core.serialization.number().optional()),
        lastOpen: core.serialization.property("last_open", core.serialization.date().optional()),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        listIsActive: core.serialization.property("list_is_active", core.serialization.boolean().optional()),
        mergeFields: core.serialization.property(
            "merge_fields",
            core.serialization.record(core.serialization.string(), SentToMergeFieldsValue).optional(),
        ),
        openCount: core.serialization.property("open_count", core.serialization.number().optional()),
        status: SentToStatus.optional(),
        vip: core.serialization.boolean().optional(),
    });

export declare namespace SentTo {
    export interface Raw {
        _links?: SentToLinksItem.Raw[] | null;
        absplit_group?: SentToAbsplitGroup.Raw | null;
        campaign_id?: string | null;
        email_address?: string | null;
        email_id?: string | null;
        gmt_offset?: number | null;
        last_open?: string | null;
        list_id?: string | null;
        list_is_active?: boolean | null;
        merge_fields?: Record<string, SentToMergeFieldsValue.Raw> | null;
        open_count?: number | null;
        status?: SentToStatus.Raw | null;
        vip?: boolean | null;
    }
}
