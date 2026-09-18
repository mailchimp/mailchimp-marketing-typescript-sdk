//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SmsCampaignLinksItem } from "./SmsCampaignLinksItem.js";

export const SmsCampaign: core.serialization.ObjectSchema<serializers.SmsCampaign.Raw, Mailchimp.SmsCampaign> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        webId: core.serialization.property("web_id", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        status: core.serialization.string().optional(),
        channel: core.serialization.string().optional(),
        listId: core.serialization.property("list_id", core.serialization.number().optional()),
        recipientCount: core.serialization.property("recipient_count", core.serialization.number().optional()),
        createTime: core.serialization.property("create_time", core.serialization.date().optional()),
        sendTime: core.serialization.property("send_time", core.serialization.date().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
        expireTime: core.serialization.property("expire_time", core.serialization.date().optional()),
        isSendNow: core.serialization.property("is_send_now", core.serialization.boolean().optional()),
        folderId: core.serialization.property("folder_id", core.serialization.string().optional()),
        segments: core.serialization.list(core.serialization.number()).optional(),
        excludedSegments: core.serialization.property(
            "excluded_segments",
            core.serialization.list(core.serialization.number()).optional(),
        ),
        links: core.serialization.property("_links", core.serialization.list(SmsCampaignLinksItem).optional()),
    });

export declare namespace SmsCampaign {
    export interface Raw {
        id?: string | null;
        web_id?: string | null;
        name?: string | null;
        status?: string | null;
        channel?: string | null;
        list_id?: number | null;
        recipient_count?: number | null;
        create_time?: string | null;
        send_time?: string | null;
        updated_at?: string | null;
        expire_time?: string | null;
        is_send_now?: boolean | null;
        folder_id?: string | null;
        segments?: number[] | null;
        excluded_segments?: number[] | null;
        _links?: SmsCampaignLinksItem.Raw[] | null;
    }
}
