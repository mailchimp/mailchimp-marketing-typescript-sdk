//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateFileFileManagerRequest: core.serialization.Schema<
    serializers.CreateFileFileManagerRequest.Raw,
    Mailchimp.CreateFileFileManagerRequest
> = core.serialization.object({
    fileData: core.serialization.property("file_data", core.serialization.string()),
    folderId: core.serialization.property("folder_id", core.serialization.number().optional()),
    name: core.serialization.string(),
});

export declare namespace CreateFileFileManagerRequest {
    export interface Raw {
        file_data: string;
        folder_id?: number | null;
        name: string;
    }
}
