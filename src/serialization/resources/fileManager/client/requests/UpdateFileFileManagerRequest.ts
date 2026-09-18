//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const UpdateFileFileManagerRequest: core.serialization.Schema<
    serializers.UpdateFileFileManagerRequest.Raw,
    Omit<Mailchimp.UpdateFileFileManagerRequest, "fileId">
> = core.serialization.object({
    folderId: core.serialization.property("folder_id", core.serialization.number().optional()),
    name: core.serialization.string().optional(),
});

export declare namespace UpdateFileFileManagerRequest {
    export interface Raw {
        folder_id?: number | null;
        name?: string | null;
    }
}
