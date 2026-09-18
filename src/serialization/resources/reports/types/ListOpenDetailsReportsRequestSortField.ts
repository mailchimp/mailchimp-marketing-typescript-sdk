//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListOpenDetailsReportsRequestSortField: core.serialization.Schema<
    serializers.ListOpenDetailsReportsRequestSortField.Raw,
    Mailchimp.ListOpenDetailsReportsRequestSortField
> = core.serialization.enum_(["opens_count"]);

export declare namespace ListOpenDetailsReportsRequestSortField {
    export type Raw = "opens_count";
}
