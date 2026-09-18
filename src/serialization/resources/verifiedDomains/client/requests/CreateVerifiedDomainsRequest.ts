//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateVerifiedDomainsRequest: core.serialization.Schema<
    serializers.CreateVerifiedDomainsRequest.Raw,
    Mailchimp.CreateVerifiedDomainsRequest
> = core.serialization.object({
    verificationEmail: core.serialization.property("verification_email", core.serialization.string()),
});

export declare namespace CreateVerifiedDomainsRequest {
    export interface Raw {
        verification_email: string;
    }
}
