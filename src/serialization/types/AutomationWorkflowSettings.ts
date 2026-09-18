//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AutomationWorkflowSettings: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowSettings.Raw,
    Mailchimp.AutomationWorkflowSettings
> = core.serialization.object({
    authenticate: core.serialization.boolean().optional(),
    autoFooter: core.serialization.property("auto_footer", core.serialization.boolean().optional()),
    fromName: core.serialization.property("from_name", core.serialization.string().optional()),
    inlineCss: core.serialization.property("inline_css", core.serialization.boolean().optional()),
    replyTo: core.serialization.property("reply_to", core.serialization.string().optional()),
    title: core.serialization.string().optional(),
    toName: core.serialization.property("to_name", core.serialization.string().optional()),
    useConversation: core.serialization.property("use_conversation", core.serialization.boolean().optional()),
});

export declare namespace AutomationWorkflowSettings {
    export interface Raw {
        authenticate?: boolean | null;
        auto_footer?: boolean | null;
        from_name?: string | null;
        inline_css?: boolean | null;
        reply_to?: string | null;
        title?: string | null;
        to_name?: string | null;
        use_conversation?: boolean | null;
    }
}
