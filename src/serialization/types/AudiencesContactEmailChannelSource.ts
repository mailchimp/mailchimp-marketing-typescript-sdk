//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AudiencesContactEmailChannelSource: core.serialization.ObjectSchema<
    serializers.AudiencesContactEmailChannelSource.Raw,
    Mailchimp.AudiencesContactEmailChannelSource
> = core.serialization.object({
    name: core.serialization.string().optional(),
});

export declare namespace AudiencesContactEmailChannelSource {
    export interface Raw {
        name?: string | null;
    }
}
