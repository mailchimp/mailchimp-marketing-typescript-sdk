//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateSignupFormListsRequestHeaderImageAlign: core.serialization.Schema<
    serializers.CreateSignupFormListsRequestHeaderImageAlign.Raw,
    Mailchimp.CreateSignupFormListsRequestHeaderImageAlign
> = core.serialization.enum_(["none", "left", "center", "right"]);

export declare namespace CreateSignupFormListsRequestHeaderImageAlign {
    export type Raw = "none" | "left" | "center" | "right";
}
