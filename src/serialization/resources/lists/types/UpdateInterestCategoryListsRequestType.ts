//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateInterestCategoryListsRequestType: core.serialization.Schema<
    serializers.UpdateInterestCategoryListsRequestType.Raw,
    Mailchimp.UpdateInterestCategoryListsRequestType
> = core.serialization.enum_(["checkboxes", "dropdown", "radio", "hidden"]);

export declare namespace UpdateInterestCategoryListsRequestType {
    export type Raw = "checkboxes" | "dropdown" | "radio" | "hidden";
}
