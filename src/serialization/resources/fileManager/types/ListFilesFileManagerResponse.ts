//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GalleryFile } from "../../../types/GalleryFile.js";
import { ListFilesFileManagerResponseLinksItem } from "./ListFilesFileManagerResponseLinksItem.js";

export const ListFilesFileManagerResponse: core.serialization.ObjectSchema<
    serializers.ListFilesFileManagerResponse.Raw,
    Mailchimp.ListFilesFileManagerResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListFilesFileManagerResponseLinksItem).optional(),
    ),
    files: core.serialization.list(GalleryFile).optional(),
    totalFileSize: core.serialization.property("total_file_size", core.serialization.number().optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListFilesFileManagerResponse {
    export interface Raw {
        _links?: ListFilesFileManagerResponseLinksItem.Raw[] | null;
        files?: GalleryFile.Raw[] | null;
        total_file_size?: number | null;
        total_items?: number | null;
    }
}
