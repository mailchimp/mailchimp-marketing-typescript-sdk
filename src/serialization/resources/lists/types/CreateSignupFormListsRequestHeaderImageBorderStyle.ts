//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateSignupFormListsRequestHeaderImageBorderStyle: core.serialization.Schema<
    serializers.CreateSignupFormListsRequestHeaderImageBorderStyle.Raw,
    Mailchimp.CreateSignupFormListsRequestHeaderImageBorderStyle
> = core.serialization.enum_(["none", "solid", "dotted", "dashed", "double", "groove", "outset", "inset", "ridge"]);

export declare namespace CreateSignupFormListsRequestHeaderImageBorderStyle {
    export type Raw = "none" | "solid" | "dotted" | "dashed" | "double" | "groove" | "outset" | "inset" | "ridge";
}
