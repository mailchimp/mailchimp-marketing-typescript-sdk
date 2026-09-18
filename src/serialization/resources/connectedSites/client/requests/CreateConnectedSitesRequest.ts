//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateConnectedSitesRequest: core.serialization.Schema<
    serializers.CreateConnectedSitesRequest.Raw,
    Mailchimp.CreateConnectedSitesRequest
> = core.serialization.object({
    domain: core.serialization.string(),
    foreignId: core.serialization.property("foreign_id", core.serialization.string()),
});

export declare namespace CreateConnectedSitesRequest {
    export interface Raw {
        domain: string;
        foreign_id: string;
    }
}
