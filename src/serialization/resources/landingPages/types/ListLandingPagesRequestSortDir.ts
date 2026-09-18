//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListLandingPagesRequestSortDir: core.serialization.Schema<
    serializers.ListLandingPagesRequestSortDir.Raw,
    Mailchimp.ListLandingPagesRequestSortDir
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ListLandingPagesRequestSortDir {
    export type Raw = "ASC" | "DESC";
}
