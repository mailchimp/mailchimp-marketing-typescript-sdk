//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const InterestCategoryType: core.serialization.Schema<
    serializers.InterestCategoryType.Raw,
    Mailchimp.InterestCategoryType
> = core.serialization.enum_(["checkboxes", "dropdown", "radio", "hidden"]);

export declare namespace InterestCategoryType {
    export type Raw = "checkboxes" | "dropdown" | "radio" | "hidden";
}
