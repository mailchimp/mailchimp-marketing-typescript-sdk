//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateFolderFileManagerResponseLinksItem } from "./UpdateFolderFileManagerResponseLinksItem.js";

export const UpdateFolderFileManagerResponse: core.serialization.ObjectSchema<
    serializers.UpdateFolderFileManagerResponse.Raw,
    Mailchimp.UpdateFolderFileManagerResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(UpdateFolderFileManagerResponseLinksItem).optional(),
    ),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
    fileCount: core.serialization.property("file_count", core.serialization.number().optional()),
    id: core.serialization.number().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace UpdateFolderFileManagerResponse {
    export interface Raw {
        _links?: UpdateFolderFileManagerResponseLinksItem.Raw[] | null;
        created_at?: string | null;
        created_by?: string | null;
        file_count?: number | null;
        id?: number | null;
        name?: string | null;
    }
}
