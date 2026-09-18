//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateSignupFormListsRequestContentsItemSection } from "./CreateSignupFormListsRequestContentsItemSection.js";

export const CreateSignupFormListsRequestContentsItem: core.serialization.ObjectSchema<
    serializers.CreateSignupFormListsRequestContentsItem.Raw,
    Mailchimp.CreateSignupFormListsRequestContentsItem
> = core.serialization.object({
    section: CreateSignupFormListsRequestContentsItemSection.optional(),
    value: core.serialization.string().optional(),
});

export declare namespace CreateSignupFormListsRequestContentsItem {
    export interface Raw {
        section?: CreateSignupFormListsRequestContentsItemSection.Raw | null;
        value?: string | null;
    }
}
