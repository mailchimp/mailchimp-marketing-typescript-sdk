//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SurveyQuestionReportMergeFieldType: core.serialization.Schema<
    serializers.SurveyQuestionReportMergeFieldType.Raw,
    Mailchimp.SurveyQuestionReportMergeFieldType
> = core.serialization.enum_([
    "text",
    "number",
    "address",
    "phone",
    "date",
    "url",
    "imageurl",
    "radio",
    "dropdown",
    "birthday",
    "zip",
]);

export declare namespace SurveyQuestionReportMergeFieldType {
    export type Raw =
        | "text"
        | "number"
        | "address"
        | "phone"
        | "date"
        | "url"
        | "imageurl"
        | "radio"
        | "dropdown"
        | "birthday"
        | "zip";
}
