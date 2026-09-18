//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SurveySectionRequestType: core.serialization.Schema<
    serializers.SurveySectionRequestType.Raw,
    Mailchimp.SurveySectionRequestType
> = core.serialization.enum_(["introduction", "context", "question"]);

export declare namespace SurveySectionRequestType {
    export type Raw = "introduction" | "context" | "question";
}
