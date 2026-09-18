//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateSignupFormListsRequestStylesItemOptionsItem } from "./CreateSignupFormListsRequestStylesItemOptionsItem.js";
import { CreateSignupFormListsRequestStylesItemSelector } from "./CreateSignupFormListsRequestStylesItemSelector.js";

export const CreateSignupFormListsRequestStylesItem: core.serialization.ObjectSchema<
    serializers.CreateSignupFormListsRequestStylesItem.Raw,
    Mailchimp.CreateSignupFormListsRequestStylesItem
> = core.serialization.object({
    options: core.serialization.list(CreateSignupFormListsRequestStylesItemOptionsItem).optional(),
    selector: CreateSignupFormListsRequestStylesItemSelector.optional(),
});

export declare namespace CreateSignupFormListsRequestStylesItem {
    export interface Raw {
        options?: CreateSignupFormListsRequestStylesItemOptionsItem.Raw[] | null;
        selector?: CreateSignupFormListsRequestStylesItemSelector.Raw | null;
    }
}
