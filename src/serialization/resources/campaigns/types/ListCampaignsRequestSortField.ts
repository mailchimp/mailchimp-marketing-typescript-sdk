//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListCampaignsRequestSortField: core.serialization.Schema<
    serializers.ListCampaignsRequestSortField.Raw,
    Mailchimp.ListCampaignsRequestSortField
> = core.serialization.enum_(["create_time", "send_time"]);

export declare namespace ListCampaignsRequestSortField {
    export type Raw = "create_time" | "send_time";
}
