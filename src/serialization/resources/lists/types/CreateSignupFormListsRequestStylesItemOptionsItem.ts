//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateSignupFormListsRequestStylesItemOptionsItem: core.serialization.ObjectSchema<
    serializers.CreateSignupFormListsRequestStylesItemOptionsItem.Raw,
    Mailchimp.CreateSignupFormListsRequestStylesItemOptionsItem
> = core.serialization.object({
    property: core.serialization.string().optional(),
    value: core.serialization.string().optional(),
});

export declare namespace CreateSignupFormListsRequestStylesItemOptionsItem {
    export interface Raw {
        property?: string | null;
        value?: string | null;
    }
}
