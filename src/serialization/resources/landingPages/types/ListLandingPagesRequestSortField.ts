//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListLandingPagesRequestSortField: core.serialization.Schema<
    serializers.ListLandingPagesRequestSortField.Raw,
    Mailchimp.ListLandingPagesRequestSortField
> = core.serialization.enum_(["created_at", "updated_at"]);

export declare namespace ListLandingPagesRequestSortField {
    export type Raw = "created_at" | "updated_at";
}
