//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SurveySectionRequestQuestionType: core.serialization.Schema<
    serializers.SurveySectionRequestQuestionType.Raw,
    Mailchimp.SurveySectionRequestQuestionType
> = core.serialization.enum_(["pickOne", "pickMany", "range", "text", "email", "contactInformation", "dropdown"]);

export declare namespace SurveySectionRequestQuestionType {
    export type Raw = "pickOne" | "pickMany" | "range" | "text" | "email" | "contactInformation" | "dropdown";
}
