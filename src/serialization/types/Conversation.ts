//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ConversationLastMessage } from "./ConversationLastMessage.js";
import { ConversationLinksItem } from "./ConversationLinksItem.js";

export const Conversation: core.serialization.ObjectSchema<serializers.Conversation.Raw, Mailchimp.Conversation> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(ConversationLinksItem).optional()),
        campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
        fromEmail: core.serialization.property("from_email", core.serialization.string().optional()),
        fromLabel: core.serialization.property("from_label", core.serialization.string().optional()),
        id: core.serialization.string().optional(),
        lastMessage: core.serialization.property("last_message", ConversationLastMessage.optional()),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        messageCount: core.serialization.property("message_count", core.serialization.number().optional()),
        subject: core.serialization.string().optional(),
        unreadMessages: core.serialization.property("unread_messages", core.serialization.number().optional()),
    });

export declare namespace Conversation {
    export interface Raw {
        _links?: ConversationLinksItem.Raw[] | null;
        campaign_id?: string | null;
        from_email?: string | null;
        from_label?: string | null;
        id?: string | null;
        last_message?: ConversationLastMessage.Raw | null;
        list_id?: string | null;
        message_count?: number | null;
        subject?: string | null;
        unread_messages?: number | null;
    }
}
