//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListSegmentsListsRequestExcludeType: core.serialization.Schema<
    serializers.ListSegmentsListsRequestExcludeType.Raw,
    Mailchimp.ListSegmentsListsRequestExcludeType
> = core.serialization.enum_(["saved", "static", "fuzzy"]);

export declare namespace ListSegmentsListsRequestExcludeType {
    export type Raw = "saved" | "static" | "fuzzy";
}
