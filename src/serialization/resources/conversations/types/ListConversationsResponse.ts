//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { Conversation } from "../../../types/Conversation.js";
import { ListConversationsResponseLinksItem } from "./ListConversationsResponseLinksItem.js";

export const ListConversationsResponse: core.serialization.ObjectSchema<
    serializers.ListConversationsResponse.Raw,
    Mailchimp.ListConversationsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListConversationsResponseLinksItem).optional(),
    ),
    conversations: core.serialization.list(Conversation).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListConversationsResponse {
    export interface Raw {
        _links?: ListConversationsResponseLinksItem.Raw[] | null;
        conversations?: Conversation.Raw[] | null;
        total_items?: number | null;
    }
}
