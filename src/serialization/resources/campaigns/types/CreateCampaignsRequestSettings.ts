//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateCampaignsRequestSettings: core.serialization.ObjectSchema<
    serializers.CreateCampaignsRequestSettings.Raw,
    Mailchimp.CreateCampaignsRequestSettings
> = core.serialization.object({
    authenticate: core.serialization.boolean().optional(),
    autoFbPost: core.serialization.property(
        "auto_fb_post",
        core.serialization.list(core.serialization.string()).optional(),
    ),
    autoFooter: core.serialization.property("auto_footer", core.serialization.boolean().optional()),
    autoTweet: core.serialization.property("auto_tweet", core.serialization.boolean().optional()),
    fbComments: core.serialization.property("fb_comments", core.serialization.boolean().optional()),
    folderId: core.serialization.property("folder_id", core.serialization.string().optional()),
    fromName: core.serialization.property("from_name", core.serialization.string().optional()),
    inlineCss: core.serialization.property("inline_css", core.serialization.boolean().optional()),
    previewText: core.serialization.property("preview_text", core.serialization.string().optional()),
    replyTo: core.serialization.property("reply_to", core.serialization.string().optional()),
    subjectLine: core.serialization.property("subject_line", core.serialization.string().optional()),
    templateId: core.serialization.property("template_id", core.serialization.number().optional()),
    title: core.serialization.string().optional(),
    toName: core.serialization.property("to_name", core.serialization.string().optional()),
    useConversation: core.serialization.property("use_conversation", core.serialization.boolean().optional()),
});

export declare namespace CreateCampaignsRequestSettings {
    export interface Raw {
        authenticate?: boolean | null;
        auto_fb_post?: string[] | null;
        auto_footer?: boolean | null;
        auto_tweet?: boolean | null;
        fb_comments?: boolean | null;
        folder_id?: string | null;
        from_name?: string | null;
        inline_css?: boolean | null;
        preview_text?: string | null;
        reply_to?: string | null;
        subject_line?: string | null;
        template_id?: number | null;
        title?: string | null;
        to_name?: string | null;
        use_conversation?: boolean | null;
    }
}
