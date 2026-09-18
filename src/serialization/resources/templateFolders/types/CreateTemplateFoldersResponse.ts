//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateTemplateFoldersResponseLinksItem } from "./CreateTemplateFoldersResponseLinksItem.js";

export const CreateTemplateFoldersResponse: core.serialization.ObjectSchema<
    serializers.CreateTemplateFoldersResponse.Raw,
    Mailchimp.CreateTemplateFoldersResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(CreateTemplateFoldersResponseLinksItem).optional(),
    ),
    count: core.serialization.number().optional(),
    id: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace CreateTemplateFoldersResponse {
    export interface Raw {
        _links?: CreateTemplateFoldersResponseLinksItem.Raw[] | null;
        count?: number | null;
        id?: string | null;
        name?: string | null;
    }
}
