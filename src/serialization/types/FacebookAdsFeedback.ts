//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const FacebookAdsFeedback: core.serialization.ObjectSchema<
    serializers.FacebookAdsFeedback.Raw,
    Mailchimp.FacebookAdsFeedback
> = core.serialization.object({
    audience: core.serialization.string().optional(),
    budget: core.serialization.string().optional(),
    compliance: core.serialization.string().optional(),
    content: core.serialization.string().optional(),
});

export declare namespace FacebookAdsFeedback {
    export interface Raw {
        audience?: string | null;
        budget?: string | null;
        compliance?: string | null;
        content?: string | null;
    }
}
