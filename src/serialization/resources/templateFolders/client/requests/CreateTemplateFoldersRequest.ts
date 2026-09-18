//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateTemplateFoldersRequest: core.serialization.Schema<
    serializers.CreateTemplateFoldersRequest.Raw,
    Mailchimp.CreateTemplateFoldersRequest
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace CreateTemplateFoldersRequest {
    export interface Raw {
        name: string;
    }
}
