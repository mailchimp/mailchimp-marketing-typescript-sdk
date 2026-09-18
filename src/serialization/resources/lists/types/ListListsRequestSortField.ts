//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListListsRequestSortField: core.serialization.Schema<
    serializers.ListListsRequestSortField.Raw,
    Mailchimp.ListListsRequestSortField
> = core.serialization.enum_(["date_created"]);

export declare namespace ListListsRequestSortField {
    export type Raw = "date_created";
}
