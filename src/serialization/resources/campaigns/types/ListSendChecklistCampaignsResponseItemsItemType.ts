//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListSendChecklistCampaignsResponseItemsItemType: core.serialization.Schema<
    serializers.ListSendChecklistCampaignsResponseItemsItemType.Raw,
    Mailchimp.ListSendChecklistCampaignsResponseItemsItemType
> = core.serialization.enum_(["success", "warning", "error"]);

export declare namespace ListSendChecklistCampaignsResponseItemsItemType {
    export type Raw = "success" | "warning" | "error";
}
