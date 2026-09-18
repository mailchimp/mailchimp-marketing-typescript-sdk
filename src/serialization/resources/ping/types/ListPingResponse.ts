//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListPingResponse: core.serialization.ObjectSchema<
    serializers.ListPingResponse.Raw,
    Mailchimp.ListPingResponse
> = core.serialization.object({
    healthStatus: core.serialization.property("health_status", core.serialization.string().optional()),
});

export declare namespace ListPingResponse {
    export interface Raw {
        health_status?: string | null;
    }
}
