//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SignupFormHeaderImageBorderStyle: core.serialization.Schema<
    serializers.SignupFormHeaderImageBorderStyle.Raw,
    Mailchimp.SignupFormHeaderImageBorderStyle
> = core.serialization.enum_(["none", "solid", "dotted", "dashed", "double", "groove", "outset", "inset", "ridge"]);

export declare namespace SignupFormHeaderImageBorderStyle {
    export type Raw = "none" | "solid" | "dotted" | "dashed" | "double" | "groove" | "outset" | "inset" | "ridge";
}
