//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListTemplatesRequestSortField: core.serialization.Schema<
    serializers.ListTemplatesRequestSortField.Raw,
    Mailchimp.ListTemplatesRequestSortField
> = core.serialization.enum_(["date_created", "date_edited", "name"]);

export declare namespace ListTemplatesRequestSortField {
    export type Raw = "date_created" | "date_edited" | "name";
}
