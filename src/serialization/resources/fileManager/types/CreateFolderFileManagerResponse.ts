//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateFolderFileManagerResponseLinksItem } from "./CreateFolderFileManagerResponseLinksItem.js";

export const CreateFolderFileManagerResponse: core.serialization.ObjectSchema<
    serializers.CreateFolderFileManagerResponse.Raw,
    Mailchimp.CreateFolderFileManagerResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(CreateFolderFileManagerResponseLinksItem).optional(),
    ),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
    fileCount: core.serialization.property("file_count", core.serialization.number().optional()),
    id: core.serialization.number().optional(),
    name: core.serialization.string().optional(),
});

export declare namespace CreateFolderFileManagerResponse {
    export interface Raw {
        _links?: CreateFolderFileManagerResponseLinksItem.Raw[] | null;
        created_at?: string | null;
        created_by?: string | null;
        file_count?: number | null;
        id?: number | null;
        name?: string | null;
    }
}
