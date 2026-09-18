//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AudiencesContactEmailChannel } from "./AudiencesContactEmailChannel.js";
import { AudiencesContactLanguage } from "./AudiencesContactLanguage.js";
import { AudiencesContactMergeFieldsValue } from "./AudiencesContactMergeFieldsValue.js";
import { AudiencesContactSmsChannel } from "./AudiencesContactSmsChannel.js";
import { AudiencesContactSource } from "./AudiencesContactSource.js";
import { AudiencesContactStatus } from "./AudiencesContactStatus.js";

export const AudiencesContact: core.serialization.ObjectSchema<
    serializers.AudiencesContact.Raw,
    Mailchimp.AudiencesContact
> = core.serialization.object({
    audienceId: core.serialization.property("audience_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    emailChannel: core.serialization.property("email_channel", AudiencesContactEmailChannel.optional()),
    id: core.serialization.string().optional(),
    language: AudiencesContactLanguage.optional(),
    lastUpdatedAt: core.serialization.property("last_updated_at", core.serialization.date().optional()),
    mergeFields: core.serialization.property(
        "merge_fields",
        core.serialization.record(core.serialization.string(), AudiencesContactMergeFieldsValue).optional(),
    ),
    smsChannel: core.serialization.property("sms_channel", AudiencesContactSmsChannel.optional()),
    source: AudiencesContactSource.optional(),
    status: AudiencesContactStatus.optional(),
    tags: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace AudiencesContact {
    export interface Raw {
        audience_id?: string | null;
        created_at?: string | null;
        email_channel?: AudiencesContactEmailChannel.Raw | null;
        id?: string | null;
        language?: AudiencesContactLanguage.Raw | null;
        last_updated_at?: string | null;
        merge_fields?: Record<string, AudiencesContactMergeFieldsValue.Raw> | null;
        sms_channel?: AudiencesContactSmsChannel.Raw | null;
        source?: AudiencesContactSource.Raw | null;
        status?: AudiencesContactStatus.Raw | null;
        tags?: string[] | null;
    }
}
