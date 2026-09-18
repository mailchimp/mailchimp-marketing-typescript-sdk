//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GetTemplateFoldersResponseLinksItem } from "./GetTemplateFoldersResponseLinksItem.js";

export const GetTemplateFoldersResponse: core.serialization.ObjectSchema<
    serializers.GetTemplateFoldersResponse.Raw,
    Mailchimp.GetTemplateFoldersResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(GetTemplateFoldersResponseLinksItem).optional(),
    ),
    count: core.serialization.number().optional(),
    id: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace GetTemplateFoldersResponse {
    export interface Raw {
        _links?: GetTemplateFoldersResponseLinksItem.Raw[] | null;
        count?: number | null;
        id?: string | null;
        name?: string | null;
    }
}
