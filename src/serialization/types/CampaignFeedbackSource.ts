//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const CampaignFeedbackSource: core.serialization.Schema<
    serializers.CampaignFeedbackSource.Raw,
    Mailchimp.CampaignFeedbackSource
> = core.serialization.enum_(["api", "email", "sms", "web", "ios", "android"]);

export declare namespace CampaignFeedbackSource {
    export type Raw = "api" | "email" | "sms" | "web" | "ios" | "android";
}
