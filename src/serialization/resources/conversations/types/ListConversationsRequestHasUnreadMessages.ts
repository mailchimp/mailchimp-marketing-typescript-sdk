//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListConversationsRequestHasUnreadMessages: core.serialization.Schema<
    serializers.ListConversationsRequestHasUnreadMessages.Raw,
    Mailchimp.ListConversationsRequestHasUnreadMessages
> = core.serialization.enum_(["true", "false"]);

export declare namespace ListConversationsRequestHasUnreadMessages {
    export type Raw = "true" | "false";
}
