//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GalleryFile } from "../../../types/GalleryFile.js";
import { ListFolderFilesFileManagerResponseLinksItem } from "./ListFolderFilesFileManagerResponseLinksItem.js";

export const ListFolderFilesFileManagerResponse: core.serialization.ObjectSchema<
    serializers.ListFolderFilesFileManagerResponse.Raw,
    Mailchimp.ListFolderFilesFileManagerResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListFolderFilesFileManagerResponseLinksItem).optional(),
    ),
    files: core.serialization.list(GalleryFile).optional(),
    totalFileSize: core.serialization.property("total_file_size", core.serialization.number().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListFolderFilesFileManagerResponse {
    export interface Raw {
        _links?: ListFolderFilesFileManagerResponseLinksItem.Raw[] | null;
        files?: GalleryFile.Raw[] | null;
        total_file_size?: number | null;
        total_items?: number | null;
    }
}
