//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateCampaignsRequestRssOptsScheduleDailySend: core.serialization.ObjectSchema<
    serializers.CreateCampaignsRequestRssOptsScheduleDailySend.Raw,
    Mailchimp.CreateCampaignsRequestRssOptsScheduleDailySend
> = core.serialization.object({
    friday: core.serialization.boolean().optional(),
    monday: core.serialization.boolean().optional(),
    saturday: core.serialization.boolean().optional(),
    sunday: core.serialization.boolean().optional(),
    thursday: core.serialization.boolean().optional(),
    tuesday: core.serialization.boolean().optional(),
    wednesday: core.serialization.boolean().optional(),
});

export declare namespace CreateCampaignsRequestRssOptsScheduleDailySend {
    export interface Raw {
        friday?: boolean | null;
        monday?: boolean | null;
        saturday?: boolean | null;
        sunday?: boolean | null;
        thursday?: boolean | null;
        tuesday?: boolean | null;
        wednesday?: boolean | null;
    }
}
