//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ConversationMessage } from "../../../types/ConversationMessage.js";
import { ListMessagesConversationsResponseLinksItem } from "./ListMessagesConversationsResponseLinksItem.js";

export const ListMessagesConversationsResponse: core.serialization.ObjectSchema<
    serializers.ListMessagesConversationsResponse.Raw,
    Mailchimp.ListMessagesConversationsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListMessagesConversationsResponseLinksItem).optional(),
    ),
    conversationId: core.serialization.property("conversation_id", core.serialization.string().optional()),
    conversationMessages: core.serialization.property(
        "conversation_messages",
        core.serialization.list(ConversationMessage).optional(),
    ),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListMessagesConversationsResponse {
    export interface Raw {
        _links?: ListMessagesConversationsResponseLinksItem.Raw[] | null;
        conversation_id?: string | null;
        conversation_messages?: ConversationMessage.Raw[] | null;
        total_items?: number | null;
    }
}
