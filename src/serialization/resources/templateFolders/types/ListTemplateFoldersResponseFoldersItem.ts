//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListTemplateFoldersResponseFoldersItemLinksItem } from "./ListTemplateFoldersResponseFoldersItemLinksItem.js";

export const ListTemplateFoldersResponseFoldersItem: core.serialization.ObjectSchema<
    serializers.ListTemplateFoldersResponseFoldersItem.Raw,
    Mailchimp.ListTemplateFoldersResponseFoldersItem
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListTemplateFoldersResponseFoldersItemLinksItem).optional(),
    ),
    count: core.serialization.number().optional(),
    id: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace ListTemplateFoldersResponseFoldersItem {
    export interface Raw {
        _links?: ListTemplateFoldersResponseFoldersItemLinksItem.Raw[] | null;
        count?: number | null;
        id?: string | null;
        name?: string | null;
    }
}
