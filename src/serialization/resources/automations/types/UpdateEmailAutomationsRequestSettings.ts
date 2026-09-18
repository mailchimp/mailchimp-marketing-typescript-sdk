//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateEmailAutomationsRequestSettings: core.serialization.ObjectSchema<
    serializers.UpdateEmailAutomationsRequestSettings.Raw,
    Mailchimp.UpdateEmailAutomationsRequestSettings
> = core.serialization.object({
    fromName: core.serialization.property("from_name", core.serialization.string().optional()),
    previewText: core.serialization.property("preview_text", core.serialization.string().optional()),
    replyTo: core.serialization.property("reply_to", core.serialization.string().optional()),
    subjectLine: core.serialization.property("subject_line", core.serialization.string().optional()),
    title: core.serialization.string().optional(),
});

export declare namespace UpdateEmailAutomationsRequestSettings {
    export interface Raw {
        from_name?: string | null;
        preview_text?: string | null;
        reply_to?: string | null;
        subject_line?: string | null;
        title?: string | null;
    }
}
