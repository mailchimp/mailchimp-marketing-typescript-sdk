//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const UpdateTemplatesRequest: core.serialization.Schema<
    serializers.UpdateTemplatesRequest.Raw,
    Omit<Mailchimp.UpdateTemplatesRequest, "templateId">
> = core.serialization.object({
    folderId: core.serialization.property("folder_id", core.serialization.string().optional()),
    html: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace UpdateTemplatesRequest {
    export interface Raw {
        folder_id?: string | null;
        html?: string | null;
        name?: string | null;
    }
}
