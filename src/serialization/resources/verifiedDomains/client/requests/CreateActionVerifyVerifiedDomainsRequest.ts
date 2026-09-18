//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateActionVerifyVerifiedDomainsRequest: core.serialization.Schema<
    serializers.CreateActionVerifyVerifiedDomainsRequest.Raw,
    Omit<Mailchimp.CreateActionVerifyVerifiedDomainsRequest, "domainName">
> = core.serialization.object({
    code: core.serialization.string(),
});

export declare namespace CreateActionVerifyVerifiedDomainsRequest {
    export interface Raw {
        code: string;
    }
}
