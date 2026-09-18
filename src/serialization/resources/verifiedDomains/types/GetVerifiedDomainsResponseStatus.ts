//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const GetVerifiedDomainsResponseStatus: core.serialization.Schema<
    serializers.GetVerifiedDomainsResponseStatus.Raw,
    Mailchimp.GetVerifiedDomainsResponseStatus
> = core.serialization.enum_([
    "VERIFICATION_IN_PROGRESS",
    "VERIFIED",
    "EXPIRED",
    "ERROR",
    "AUTHENTICATION_IN_PROGRESS",
    "AUTHENTICATION_ERROR",
    "AUTHENTICATED",
]);

export declare namespace GetVerifiedDomainsResponseStatus {
    export type Raw =
        | "VERIFICATION_IN_PROGRESS"
        | "VERIFIED"
        | "EXPIRED"
        | "ERROR"
        | "AUTHENTICATION_IN_PROGRESS"
        | "AUTHENTICATION_ERROR"
        | "AUTHENTICATED";
}
