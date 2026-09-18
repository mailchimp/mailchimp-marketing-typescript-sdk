//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListFilesFileManagerRequestSortField: core.serialization.Schema<
    serializers.ListFilesFileManagerRequestSortField.Raw,
    Mailchimp.ListFilesFileManagerRequestSortField
> = core.serialization.enum_(["added_date", "name", "size"]);

export declare namespace ListFilesFileManagerRequestSortField {
    export type Raw = "added_date" | "name" | "size";
}
