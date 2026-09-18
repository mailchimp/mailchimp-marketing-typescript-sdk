//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SignupFormStylesItemOptionsItem } from "./SignupFormStylesItemOptionsItem.js";
import { SignupFormStylesItemSelector } from "./SignupFormStylesItemSelector.js";

export const SignupFormStylesItem: core.serialization.ObjectSchema<
    serializers.SignupFormStylesItem.Raw,
    Mailchimp.SignupFormStylesItem
> = core.serialization.object({
    options: core.serialization.list(SignupFormStylesItemOptionsItem).optional(),
    selector: SignupFormStylesItemSelector.optional(),
});

export declare namespace SignupFormStylesItem {
    export interface Raw {
        options?: SignupFormStylesItemOptionsItem.Raw[] | null;
        selector?: SignupFormStylesItemSelector.Raw | null;
    }
}
