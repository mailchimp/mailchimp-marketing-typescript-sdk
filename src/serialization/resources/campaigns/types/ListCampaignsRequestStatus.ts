//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListCampaignsRequestStatus: core.serialization.Schema<
    serializers.ListCampaignsRequestStatus.Raw,
    Mailchimp.ListCampaignsRequestStatus
> = core.serialization.enum_(["save", "paused", "schedule", "sending", "sent"]);

export declare namespace ListCampaignsRequestStatus {
    export type Raw = "save" | "paused" | "schedule" | "sending" | "sent";
}
