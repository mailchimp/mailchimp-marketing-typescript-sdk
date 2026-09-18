//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SmsCampaignContentSource: core.serialization.ObjectSchema<
    serializers.SmsCampaignContentSource.Raw,
    Mailchimp.SmsCampaignContentSource
> = core.serialization.object({
    type: core.serialization.string().optional(),
    id: core.serialization.string().optional(),
});

export declare namespace SmsCampaignContentSource {
    export interface Raw {
        type?: string | null;
        id?: string | null;
    }
}
