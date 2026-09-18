//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListClickDetailsReportsRequestSortField: core.serialization.Schema<
    serializers.ListClickDetailsReportsRequestSortField.Raw,
    Mailchimp.ListClickDetailsReportsRequestSortField
> = core.serialization.enum_(["total_clicks", "unique_clicks"]);

export declare namespace ListClickDetailsReportsRequestSortField {
    export type Raw = "total_clicks" | "unique_clicks";
}
