//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SignupFormContentsItemSection } from "./SignupFormContentsItemSection.js";

export const SignupFormContentsItem: core.serialization.ObjectSchema<
    serializers.SignupFormContentsItem.Raw,
    Mailchimp.SignupFormContentsItem
> = core.serialization.object({
    section: SignupFormContentsItemSection.optional(),
    value: core.serialization.string().optional(),
});

export declare namespace SignupFormContentsItem {
    export interface Raw {
        section?: SignupFormContentsItemSection.Raw | null;
        value?: string | null;
    }
}
