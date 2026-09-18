//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateSignupFormListsRequestHeaderImageAlign } from "./CreateSignupFormListsRequestHeaderImageAlign.js";
import { CreateSignupFormListsRequestHeaderImageBorderStyle } from "./CreateSignupFormListsRequestHeaderImageBorderStyle.js";
import { CreateSignupFormListsRequestHeaderImageTarget } from "./CreateSignupFormListsRequestHeaderImageTarget.js";

export const CreateSignupFormListsRequestHeader: core.serialization.ObjectSchema<
    serializers.CreateSignupFormListsRequestHeader.Raw,
    Mailchimp.CreateSignupFormListsRequestHeader
> = core.serialization.object({
    imageAlign: core.serialization.property("image_align", CreateSignupFormListsRequestHeaderImageAlign.optional()),
    imageAlt: core.serialization.property("image_alt", core.serialization.string().optional()),
    imageBorderColor: core.serialization.property("image_border_color", core.serialization.string().optional()),
    imageBorderStyle: core.serialization.property(
        "image_border_style",
        CreateSignupFormListsRequestHeaderImageBorderStyle.optional(),
    ),
    imageBorderWidth: core.serialization.property("image_border_width", core.serialization.string().optional()),
    imageHeight: core.serialization.property("image_height", core.serialization.string().optional()),
    imageLink: core.serialization.property("image_link", core.serialization.string().optional()),
    imageTarget: core.serialization.property("image_target", CreateSignupFormListsRequestHeaderImageTarget.optional()),
    imageUrl: core.serialization.property("image_url", core.serialization.string().optional()),
    imageWidth: core.serialization.property("image_width", core.serialization.string().optional()),
    text: core.serialization.string().optional(),
});

export declare namespace CreateSignupFormListsRequestHeader {
    export interface Raw {
        image_align?: CreateSignupFormListsRequestHeaderImageAlign.Raw | null;
        image_alt?: string | null;
        image_border_color?: string | null;
        image_border_style?: CreateSignupFormListsRequestHeaderImageBorderStyle.Raw | null;
        image_border_width?: string | null;
        image_height?: string | null;
        image_link?: string | null;
        image_target?: CreateSignupFormListsRequestHeaderImageTarget.Raw | null;
        image_url?: string | null;
        image_width?: string | null;
        text?: string | null;
    }
}
