//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { SignupForm } from "../../../types/SignupForm.js";
import { ListSignupFormsListsResponseLinksItem } from "./ListSignupFormsListsResponseLinksItem.js";

export const ListSignupFormsListsResponse: core.serialization.ObjectSchema<
    serializers.ListSignupFormsListsResponse.Raw,
    Mailchimp.ListSignupFormsListsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListSignupFormsListsResponseLinksItem).optional(),
    ),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    signupForms: core.serialization.property("signup_forms", core.serialization.list(SignupForm).optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListSignupFormsListsResponse {
    export interface Raw {
        _links?: ListSignupFormsListsResponseLinksItem.Raw[] | null;
        list_id?: string | null;
        signup_forms?: SignupForm.Raw[] | null;
        total_items?: number | null;
    }
}
