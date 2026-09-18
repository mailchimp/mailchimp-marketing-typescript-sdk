//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateSignupFormListsRequestContentsItem } from "../../types/CreateSignupFormListsRequestContentsItem.js";
import { CreateSignupFormListsRequestHeader } from "../../types/CreateSignupFormListsRequestHeader.js";
import { CreateSignupFormListsRequestStylesItem } from "../../types/CreateSignupFormListsRequestStylesItem.js";

export const CreateSignupFormListsRequest: core.serialization.Schema<
    serializers.CreateSignupFormListsRequest.Raw,
    Omit<Mailchimp.CreateSignupFormListsRequest, "listId">
> = core.serialization.object({
    contents: core.serialization.list(CreateSignupFormListsRequestContentsItem).optional(),
    header: CreateSignupFormListsRequestHeader.optional(),
    styles: core.serialization.list(CreateSignupFormListsRequestStylesItem).optional(),
});

export declare namespace CreateSignupFormListsRequest {
    export interface Raw {
        contents?: CreateSignupFormListsRequestContentsItem.Raw[] | null;
        header?: CreateSignupFormListsRequestHeader.Raw | null;
        styles?: CreateSignupFormListsRequestStylesItem.Raw[] | null;
    }
}
