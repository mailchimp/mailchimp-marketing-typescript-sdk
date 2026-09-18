//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListClickDetailsReportsRequestSortDir: core.serialization.Schema<
    serializers.ListClickDetailsReportsRequestSortDir.Raw,
    Mailchimp.ListClickDetailsReportsRequestSortDir
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ListClickDetailsReportsRequestSortDir {
    export type Raw = "ASC" | "DESC";
}
