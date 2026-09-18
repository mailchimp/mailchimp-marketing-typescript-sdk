//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ConversationLastMessage: core.serialization.ObjectSchema<
    serializers.ConversationLastMessage.Raw,
    Mailchimp.ConversationLastMessage
> = core.serialization.object({
    fromEmail: core.serialization.property("from_email", core.serialization.string().optional()),
    fromLabel: core.serialization.property("from_label", core.serialization.string().optional()),
    message: core.serialization.string().optional(),
    read: core.serialization.boolean().optional(),
    subject: core.serialization.string().optional(),
    timestamp: core.serialization.date().optional(),
});

export declare namespace ConversationLastMessage {
    export interface Raw {
        from_email?: string | null;
        from_label?: string | null;
        message?: string | null;
        read?: boolean | null;
        subject?: string | null;
        timestamp?: string | null;
    }
}
