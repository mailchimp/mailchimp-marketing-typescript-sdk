//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ConversationMessageLinksItem } from "./ConversationMessageLinksItem.js";

export const ConversationMessage: core.serialization.ObjectSchema<
    serializers.ConversationMessage.Raw,
    Mailchimp.ConversationMessage
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ConversationMessageLinksItem).optional()),
    conversationId: core.serialization.property("conversation_id", core.serialization.string().optional()),
    fromEmail: core.serialization.property("from_email", core.serialization.string().optional()),
    fromLabel: core.serialization.property("from_label", core.serialization.string().optional()),
    id: core.serialization.string().optional(),
    listId: core.serialization.property("list_id", core.serialization.number().optional()),
    message: core.serialization.string().optional(),
    read: core.serialization.boolean().optional(),
    subject: core.serialization.string().optional(),
    timestamp: core.serialization.date().optional(),
});

export declare namespace ConversationMessage {
    export interface Raw {
        _links?: ConversationMessageLinksItem.Raw[] | null;
        conversation_id?: string | null;
        from_email?: string | null;
        from_label?: string | null;
        id?: string | null;
        list_id?: number | null;
        message?: string | null;
        read?: boolean | null;
        subject?: string | null;
        timestamp?: string | null;
    }
}
