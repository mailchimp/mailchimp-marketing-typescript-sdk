//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListTemplateFoldersResponseFoldersItem } from "./ListTemplateFoldersResponseFoldersItem.js";
import { ListTemplateFoldersResponseLinksItem } from "./ListTemplateFoldersResponseLinksItem.js";

export const ListTemplateFoldersResponse: core.serialization.ObjectSchema<
    serializers.ListTemplateFoldersResponse.Raw,
    Mailchimp.ListTemplateFoldersResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListTemplateFoldersResponseLinksItem).optional(),
    ),
    folders: core.serialization.list(ListTemplateFoldersResponseFoldersItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListTemplateFoldersResponse {
    export interface Raw {
        _links?: ListTemplateFoldersResponseLinksItem.Raw[] | null;
        folders?: ListTemplateFoldersResponseFoldersItem.Raw[] | null;
        total_items?: number | null;
    }
}
