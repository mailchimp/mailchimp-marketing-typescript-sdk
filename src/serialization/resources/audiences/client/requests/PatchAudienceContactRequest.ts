//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { PatchAudienceContactRequestEmailChannel } from "../../types/PatchAudienceContactRequestEmailChannel.js";
import { PatchAudienceContactRequestMergeFieldsValue } from "../../types/PatchAudienceContactRequestMergeFieldsValue.js";
import { PatchAudienceContactRequestSmsChannel } from "../../types/PatchAudienceContactRequestSmsChannel.js";
import { PatchAudienceContactRequestTagsItem } from "../../types/PatchAudienceContactRequestTagsItem.js";

export const PatchAudienceContactRequest: core.serialization.Schema<
    serializers.PatchAudienceContactRequest.Raw,
    Omit<Mailchimp.PatchAudienceContactRequest, "audienceId" | "contactId" | "mergeFieldValidationMode" | "dataMode">
> = core.serialization.object({
    emailChannel: core.serialization.property("email_channel", PatchAudienceContactRequestEmailChannel.optional()),
    language: core.serialization.string().optional(),
    mergeFields: core.serialization.property(
        "merge_fields",
        core.serialization.record(core.serialization.string(), PatchAudienceContactRequestMergeFieldsValue).optional(),
    ),
    smsChannel: core.serialization.property("sms_channel", PatchAudienceContactRequestSmsChannel.optional()),
    tags: core.serialization.list(PatchAudienceContactRequestTagsItem).optional(),
});

export declare namespace PatchAudienceContactRequest {
    export interface Raw {
        email_channel?: PatchAudienceContactRequestEmailChannel.Raw | null;
        language?: string | null;
        merge_fields?: Record<string, PatchAudienceContactRequestMergeFieldsValue.Raw> | null;
        sms_channel?: PatchAudienceContactRequestSmsChannel.Raw | null;
        tags?: PatchAudienceContactRequestTagsItem.Raw[] | null;
    }
}
