//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SignupFormStylesItemOptionsItem: core.serialization.ObjectSchema<
    serializers.SignupFormStylesItemOptionsItem.Raw,
    Mailchimp.SignupFormStylesItemOptionsItem
> = core.serialization.object({
    property: core.serialization.string().optional(),
    value: core.serialization.string().optional(),
});

export declare namespace SignupFormStylesItemOptionsItem {
    export interface Raw {
        property?: string | null;
        value?: string | null;
    }
}
