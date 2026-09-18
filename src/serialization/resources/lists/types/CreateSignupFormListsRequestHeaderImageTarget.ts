//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateSignupFormListsRequestHeaderImageTarget: core.serialization.Schema<
    serializers.CreateSignupFormListsRequestHeaderImageTarget.Raw,
    Mailchimp.CreateSignupFormListsRequestHeaderImageTarget
> = core.serialization.enum_(["_blank", "null"]);

export declare namespace CreateSignupFormListsRequestHeaderImageTarget {
    export type Raw = "_blank" | "null";
}
