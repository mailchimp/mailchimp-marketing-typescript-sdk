//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListFoldersFileManagerResponseFoldersItem } from "./ListFoldersFileManagerResponseFoldersItem.js";
import { ListFoldersFileManagerResponseLinksItem } from "./ListFoldersFileManagerResponseLinksItem.js";

export const ListFoldersFileManagerResponse: core.serialization.ObjectSchema<
    serializers.ListFoldersFileManagerResponse.Raw,
    Mailchimp.ListFoldersFileManagerResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListFoldersFileManagerResponseLinksItem).optional(),
    ),
    folders: core.serialization.list(ListFoldersFileManagerResponseFoldersItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListFoldersFileManagerResponse {
    export interface Raw {
        _links?: ListFoldersFileManagerResponseLinksItem.Raw[] | null;
        folders?: ListFoldersFileManagerResponseFoldersItem.Raw[] | null;
        total_items?: number | null;
    }
}
