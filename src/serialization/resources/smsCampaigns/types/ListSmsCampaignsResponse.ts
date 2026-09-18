//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { SmsCampaign } from "../../../types/SmsCampaign.js";
import { ListSmsCampaignsResponseLinksItem } from "./ListSmsCampaignsResponseLinksItem.js";

export const ListSmsCampaignsResponse: core.serialization.ObjectSchema<
    serializers.ListSmsCampaignsResponse.Raw,
    Mailchimp.ListSmsCampaignsResponse
> = core.serialization.object({
    smsCampaigns: core.serialization.property("sms_campaigns", core.serialization.list(SmsCampaign).optional()),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
    links: core.serialization.property("_links", core.serialization.list(ListSmsCampaignsResponseLinksItem).optional()),
});

export declare namespace ListSmsCampaignsResponse {
    export interface Raw {
        sms_campaigns?: SmsCampaign.Raw[] | null;
        total_items?: number | null;
        _links?: ListSmsCampaignsResponseLinksItem.Raw[] | null;
    }
}
