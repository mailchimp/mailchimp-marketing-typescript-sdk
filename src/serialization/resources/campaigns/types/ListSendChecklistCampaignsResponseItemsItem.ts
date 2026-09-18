//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSendChecklistCampaignsResponseItemsItemType } from "./ListSendChecklistCampaignsResponseItemsItemType.js";

export const ListSendChecklistCampaignsResponseItemsItem: core.serialization.ObjectSchema<
    serializers.ListSendChecklistCampaignsResponseItemsItem.Raw,
    Mailchimp.ListSendChecklistCampaignsResponseItemsItem
> = core.serialization.object({
    details: core.serialization.string().optional(),
    heading: core.serialization.string().optional(),
    id: core.serialization.number().optional(),
    type: ListSendChecklistCampaignsResponseItemsItemType.optional(),
});

export declare namespace ListSendChecklistCampaignsResponseItemsItem {
    export interface Raw {
        details?: string | null;
        heading?: string | null;
        id?: number | null;
        type?: ListSendChecklistCampaignsResponseItemsItemType.Raw | null;
    }
}
