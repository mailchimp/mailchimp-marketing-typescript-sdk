//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AudiencesContactSmsChannelSource: core.serialization.ObjectSchema<
    serializers.AudiencesContactSmsChannelSource.Raw,
    Mailchimp.AudiencesContactSmsChannelSource
> = core.serialization.object({
    name: core.serialization.string().optional(),
});

export declare namespace AudiencesContactSmsChannelSource {
    export interface Raw {
        name?: string | null;
    }
}
