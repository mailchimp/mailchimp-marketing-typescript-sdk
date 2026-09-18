//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListSendChecklistCampaignsResponseItemsItem } from "./ListSendChecklistCampaignsResponseItemsItem.js";
import { ListSendChecklistCampaignsResponseLinksItem } from "./ListSendChecklistCampaignsResponseLinksItem.js";

export const ListSendChecklistCampaignsResponse: core.serialization.ObjectSchema<
    serializers.ListSendChecklistCampaignsResponse.Raw,
    Mailchimp.ListSendChecklistCampaignsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListSendChecklistCampaignsResponseLinksItem).optional(),
    ),
    isReady: core.serialization.property("is_ready", core.serialization.boolean().optional()),
    items: core.serialization.list(ListSendChecklistCampaignsResponseItemsItem).optional(),
});

export declare namespace ListSendChecklistCampaignsResponse {
    export interface Raw {
        _links?: ListSendChecklistCampaignsResponseLinksItem.Raw[] | null;
        is_ready?: boolean | null;
        items?: ListSendChecklistCampaignsResponseItemsItem.Raw[] | null;
    }
}
