//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateTemplatesRequest: core.serialization.Schema<
    serializers.CreateTemplatesRequest.Raw,
    Mailchimp.CreateTemplatesRequest
> = core.serialization.object({
    folderId: core.serialization.property("folder_id", core.serialization.string().optional()),
    html: core.serialization.string(),
    name: core.serialization.string(),
});

export declare namespace CreateTemplatesRequest {
    export interface Raw {
        folder_id?: string | null;
        html: string;
        name: string;
    }
}
