//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const UpdateFolderFileManagerRequest: core.serialization.Schema<
    serializers.UpdateFolderFileManagerRequest.Raw,
    Omit<Mailchimp.UpdateFolderFileManagerRequest, "folderId">
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace UpdateFolderFileManagerRequest {
    export interface Raw {
        name: string;
    }
}
