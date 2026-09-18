//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AutomationWorkflowEmailSettings: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowEmailSettings.Raw,
    Mailchimp.AutomationWorkflowEmailSettings
> = core.serialization.object({
    authenticate: core.serialization.boolean().optional(),
    autoFbPost: core.serialization.property(
        "auto_fb_post",
        core.serialization.list(core.serialization.string()).optional(),
    ),
    autoFooter: core.serialization.property("auto_footer", core.serialization.boolean().optional()),
    autoTweet: core.serialization.property("auto_tweet", core.serialization.boolean().optional()),
    dragAndDrop: core.serialization.property("drag_and_drop", core.serialization.boolean().optional()),
    fbComments: core.serialization.property("fb_comments", core.serialization.boolean().optional()),
    fromName: core.serialization.property("from_name", core.serialization.string().optional()),
    inlineCss: core.serialization.property("inline_css", core.serialization.boolean().optional()),
    previewText: core.serialization.property("preview_text", core.serialization.string().optional()),
    replyTo: core.serialization.property("reply_to", core.serialization.string().optional()),
    subjectLine: core.serialization.property("subject_line", core.serialization.string().optional()),
    templateId: core.serialization.property("template_id", core.serialization.number().optional()),
    title: core.serialization.string().optional(),
});

export declare namespace AutomationWorkflowEmailSettings {
    export interface Raw {
        authenticate?: boolean | null;
        auto_fb_post?: string[] | null;
        auto_footer?: boolean | null;
        auto_tweet?: boolean | null;
        drag_and_drop?: boolean | null;
        fb_comments?: boolean | null;
        from_name?: string | null;
        inline_css?: boolean | null;
        preview_text?: string | null;
        reply_to?: string | null;
        subject_line?: string | null;
        template_id?: number | null;
        title?: string | null;
    }
}
