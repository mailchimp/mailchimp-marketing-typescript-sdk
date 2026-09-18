//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateTemplateFoldersResponseLinksItem } from "./UpdateTemplateFoldersResponseLinksItem.js";

export const UpdateTemplateFoldersResponse: core.serialization.ObjectSchema<
    serializers.UpdateTemplateFoldersResponse.Raw,
    Mailchimp.UpdateTemplateFoldersResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(UpdateTemplateFoldersResponseLinksItem).optional(),
    ),
    count: core.serialization.number().optional(),
    id: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace UpdateTemplateFoldersResponse {
    export interface Raw {
        _links?: UpdateTemplateFoldersResponseLinksItem.Raw[] | null;
        count?: number | null;
        id?: string | null;
        name?: string | null;
    }
}
