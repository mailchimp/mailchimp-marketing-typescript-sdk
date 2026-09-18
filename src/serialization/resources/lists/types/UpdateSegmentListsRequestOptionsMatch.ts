//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateSegmentListsRequestOptionsMatch: core.serialization.Schema<
    serializers.UpdateSegmentListsRequestOptionsMatch.Raw,
    Mailchimp.UpdateSegmentListsRequestOptionsMatch
> = core.serialization.enum_(["any", "all"]);

export declare namespace UpdateSegmentListsRequestOptionsMatch {
    export type Raw = "any" | "all";
}
