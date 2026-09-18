//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateFolderFileManagerRequest: core.serialization.Schema<
    serializers.CreateFolderFileManagerRequest.Raw,
    Mailchimp.CreateFolderFileManagerRequest
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace CreateFolderFileManagerRequest {
    export interface Raw {
        name: string;
    }
}
