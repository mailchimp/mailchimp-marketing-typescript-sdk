//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateAudienceContactRequestEmailChannel } from "../../types/CreateAudienceContactRequestEmailChannel.js";
import { CreateAudienceContactRequestMergeFieldsValue } from "../../types/CreateAudienceContactRequestMergeFieldsValue.js";
import { CreateAudienceContactRequestSmsChannel } from "../../types/CreateAudienceContactRequestSmsChannel.js";
import { CreateAudienceContactRequestTagsItem } from "../../types/CreateAudienceContactRequestTagsItem.js";

export const CreateAudienceContactRequest: core.serialization.Schema<
    serializers.CreateAudienceContactRequest.Raw,
    Omit<Mailchimp.CreateAudienceContactRequest, "audienceId" | "mergeFieldValidationMode" | "dataMode">
> = core.serialization.object({
    emailChannel: core.serialization.property("email_channel", CreateAudienceContactRequestEmailChannel.optional()),
    language: core.serialization.string().optional(),
    mergeFields: core.serialization.property(
        "merge_fields",
        core.serialization.record(core.serialization.string(), CreateAudienceContactRequestMergeFieldsValue).optional(),
    ),
    smsChannel: core.serialization.property("sms_channel", CreateAudienceContactRequestSmsChannel.optional()),
    tags: core.serialization.list(CreateAudienceContactRequestTagsItem).optional(),
    updateExisting: core.serialization.property("update_existing", core.serialization.boolean().optional()),
});

export declare namespace CreateAudienceContactRequest {
    export interface Raw {
        email_channel?: CreateAudienceContactRequestEmailChannel.Raw | null;
        language?: string | null;
        merge_fields?: Record<string, CreateAudienceContactRequestMergeFieldsValue.Raw> | null;
        sms_channel?: CreateAudienceContactRequestSmsChannel.Raw | null;
        tags?: CreateAudienceContactRequestTagsItem.Raw[] | null;
        update_existing?: boolean | null;
    }
}
