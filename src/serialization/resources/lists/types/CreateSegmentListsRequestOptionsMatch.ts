//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateSegmentListsRequestOptionsMatch: core.serialization.Schema<
    serializers.CreateSegmentListsRequestOptionsMatch.Raw,
    Mailchimp.CreateSegmentListsRequestOptionsMatch
> = core.serialization.enum_(["any", "all"]);

export declare namespace CreateSegmentListsRequestOptionsMatch {
    export type Raw = "any" | "all";
}
