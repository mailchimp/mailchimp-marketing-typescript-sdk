//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { Campaigns } from "../../../types/Campaigns.js";

export const ListSearchCampaignsResponseResultsItem: core.serialization.ObjectSchema<
    serializers.ListSearchCampaignsResponseResultsItem.Raw,
    Mailchimp.ListSearchCampaignsResponseResultsItem
> = core.serialization.object({
    campaign: Campaigns.optional(),
    snippet: core.serialization.string().optional(),
});

export declare namespace ListSearchCampaignsResponseResultsItem {
    export interface Raw {
        campaign?: Campaigns.Raw | null;
        snippet?: string | null;
    }
}
