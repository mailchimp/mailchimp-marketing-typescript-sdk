//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const UpdateTemplateFoldersRequest: core.serialization.Schema<
    serializers.UpdateTemplateFoldersRequest.Raw,
    Omit<Mailchimp.UpdateTemplateFoldersRequest, "folderId">
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace UpdateTemplateFoldersRequest {
    export interface Raw {
        name: string;
    }
}
