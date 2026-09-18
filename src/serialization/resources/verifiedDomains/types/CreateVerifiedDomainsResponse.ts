//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateVerifiedDomainsResponseStatus } from "./CreateVerifiedDomainsResponseStatus.js";

export const CreateVerifiedDomainsResponse: core.serialization.ObjectSchema<
    serializers.CreateVerifiedDomainsResponse.Raw,
    Mailchimp.CreateVerifiedDomainsResponse
> = core.serialization.object({
    authenticated: core.serialization.boolean().optional(),
    domain: core.serialization.string().optional(),
    isFreeEmailProvider: core.serialization.property("is_free_email_provider", core.serialization.boolean().optional()),
    status: CreateVerifiedDomainsResponseStatus.optional(),
    verificationEmail: core.serialization.property("verification_email", core.serialization.string().optional()),
    verificationSent: core.serialization.property("verification_sent", core.serialization.date().optional()),
    verified: core.serialization.boolean().optional(),
});

export declare namespace CreateVerifiedDomainsResponse {
    export interface Raw {
        authenticated?: boolean | null;
        domain?: string | null;
        is_free_email_provider?: boolean | null;
        status?: CreateVerifiedDomainsResponseStatus.Raw | null;
        verification_email?: string | null;
        verification_sent?: string | null;
        verified?: boolean | null;
    }
}
