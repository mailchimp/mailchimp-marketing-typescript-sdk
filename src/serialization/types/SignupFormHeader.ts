//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SignupFormHeaderImageAlign } from "./SignupFormHeaderImageAlign.js";
import { SignupFormHeaderImageBorderStyle } from "./SignupFormHeaderImageBorderStyle.js";
import { SignupFormHeaderImageTarget } from "./SignupFormHeaderImageTarget.js";

export const SignupFormHeader: core.serialization.ObjectSchema<
    serializers.SignupFormHeader.Raw,
    Mailchimp.SignupFormHeader
> = core.serialization.object({
    imageAlign: core.serialization.property("image_align", SignupFormHeaderImageAlign.optional()),
    imageAlt: core.serialization.property("image_alt", core.serialization.string().optional()),
    imageBorderColor: core.serialization.property("image_border_color", core.serialization.string().optional()),
    imageBorderStyle: core.serialization.property("image_border_style", SignupFormHeaderImageBorderStyle.optional()),
    imageBorderWidth: core.serialization.property("image_border_width", core.serialization.string().optional()),
    imageHeight: core.serialization.property("image_height", core.serialization.string().optional()),
    imageLink: core.serialization.property("image_link", core.serialization.string().optional()),
    imageTarget: core.serialization.property("image_target", SignupFormHeaderImageTarget.optional()),
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    imageWidth: core.serialization.property("image_width", core.serialization.string().optional()),
    text: core.serialization.string().optional(),
});

export declare namespace SignupFormHeader {
    export interface Raw {
        image_align?: SignupFormHeaderImageAlign.Raw | null;
        image_alt?: string | null;
        image_border_color?: string | null;
        image_border_style?: SignupFormHeaderImageBorderStyle.Raw | null;
        image_border_width?: string | null;
        image_height?: string | null;
        image_link?: string | null;
        image_target?: SignupFormHeaderImageTarget.Raw | null;
        image_url?: string | null;
        image_width?: string | null;
        text?: string | null;
    }
}
