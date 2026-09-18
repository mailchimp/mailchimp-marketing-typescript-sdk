//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SignupFormContentsItemSection: core.serialization.Schema<
    serializers.SignupFormContentsItemSection.Raw,
    Mailchimp.SignupFormContentsItemSection
> = core.serialization.enum_(["signup_message", "unsub_message", "signup_thank_you_title"]);

export declare namespace SignupFormContentsItemSection {
    export type Raw = "signup_message" | "unsub_message" | "signup_thank_you_title";
}
