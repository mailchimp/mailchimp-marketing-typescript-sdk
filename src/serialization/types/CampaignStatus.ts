//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignStatus: core.serialization.Schema<serializers.CampaignStatus.Raw, Mailchimp.CampaignStatus> =
    core.serialization.enum_(["save", "paused", "schedule", "sending", "sent", "canceled", "canceling", "archived"]);

export declare namespace CampaignStatus {
    export type Raw = "save" | "paused" | "schedule" | "sending" | "sent" | "canceled" | "canceling" | "archived";
}
