//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListOpenDetailsReportsRequestSortDir: core.serialization.Schema<
    serializers.ListOpenDetailsReportsRequestSortDir.Raw,
    Mailchimp.ListOpenDetailsReportsRequestSortDir
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ListOpenDetailsReportsRequestSortDir {
    export type Raw = "ASC" | "DESC";
}
