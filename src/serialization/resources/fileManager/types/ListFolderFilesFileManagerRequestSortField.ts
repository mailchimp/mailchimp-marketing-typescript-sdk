//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListFolderFilesFileManagerRequestSortField: core.serialization.Schema<
    serializers.ListFolderFilesFileManagerRequestSortField.Raw,
    Mailchimp.ListFolderFilesFileManagerRequestSortField
> = core.serialization.enum_(["added_date", "name", "size"]);

export declare namespace ListFolderFilesFileManagerRequestSortField {
    export type Raw = "added_date" | "name" | "size";
}
