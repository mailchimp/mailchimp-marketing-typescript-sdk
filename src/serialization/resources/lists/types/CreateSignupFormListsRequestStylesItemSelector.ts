//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateSignupFormListsRequestStylesItemSelector: core.serialization.Schema<
    serializers.CreateSignupFormListsRequestStylesItemSelector.Raw,
    Mailchimp.CreateSignupFormListsRequestStylesItemSelector
> = core.serialization.enum_([
    "page_background",
    "page_header",
    "page_outer_wrapper",
    "body_background",
    "body_link_style",
    "forms_buttons",
    "forms_buttons_hovered",
    "forms_field_label",
    "forms_field_text",
    "forms_required",
    "forms_required_legend",
    "forms_help_text",
    "forms_errors",
    "monkey_rewards_badge",
]);

export declare namespace CreateSignupFormListsRequestStylesItemSelector {
    export type Raw =
        | "page_background"
        | "page_header"
        | "page_outer_wrapper"
        | "body_background"
        | "body_link_style"
        | "forms_buttons"
        | "forms_buttons_hovered"
        | "forms_field_label"
        | "forms_field_text"
        | "forms_required"
        | "forms_required_legend"
        | "forms_help_text"
        | "forms_errors"
        | "monkey_rewards_badge";
}
