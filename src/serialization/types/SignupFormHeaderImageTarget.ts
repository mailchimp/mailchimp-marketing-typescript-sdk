//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SignupFormHeaderImageTarget: core.serialization.Schema<
    serializers.SignupFormHeaderImageTarget.Raw,
    Mailchimp.SignupFormHeaderImageTarget
> = core.serialization.enum_(["_blank", "null"]);

export declare namespace SignupFormHeaderImageTarget {
    export type Raw = "_blank" | "null";
}
