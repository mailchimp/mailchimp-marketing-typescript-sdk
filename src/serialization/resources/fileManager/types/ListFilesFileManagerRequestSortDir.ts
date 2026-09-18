//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListFilesFileManagerRequestSortDir: core.serialization.Schema<
    serializers.ListFilesFileManagerRequestSortDir.Raw,
    Mailchimp.ListFilesFileManagerRequestSortDir
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ListFilesFileManagerRequestSortDir {
    export type Raw = "ASC" | "DESC";
}
