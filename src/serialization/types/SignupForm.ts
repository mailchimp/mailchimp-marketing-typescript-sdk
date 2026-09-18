//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SignupFormContentsItem } from "./SignupFormContentsItem.js";
import { SignupFormHeader } from "./SignupFormHeader.js";
import { SignupFormLinksItem } from "./SignupFormLinksItem.js";
import { SignupFormStylesItem } from "./SignupFormStylesItem.js";

export const SignupForm: core.serialization.ObjectSchema<serializers.SignupForm.Raw, Mailchimp.SignupForm> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(SignupFormLinksItem).optional()),
        contents: core.serialization.list(SignupFormContentsItem).optional(),
        header: SignupFormHeader.optional(),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        signupFormUrl: core.serialization.property("signup_form_url", core.serialization.string().optional()),
        styles: core.serialization.list(SignupFormStylesItem).optional(),
    });

export declare namespace SignupForm {
    export interface Raw {
        _links?: SignupFormLinksItem.Raw[] | null;
        contents?: SignupFormContentsItem.Raw[] | null;
        header?: SignupFormHeader.Raw | null;
        list_id?: string | null;
        signup_form_url?: string | null;
        styles?: SignupFormStylesItem.Raw[] | null;
    }
}
