//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListFolderFilesFileManagerRequestSortDir: core.serialization.Schema<
    serializers.ListFolderFilesFileManagerRequestSortDir.Raw,
    Mailchimp.ListFolderFilesFileManagerRequestSortDir
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ListFolderFilesFileManagerRequestSortDir {
    export type Raw = "ASC" | "DESC";
}
