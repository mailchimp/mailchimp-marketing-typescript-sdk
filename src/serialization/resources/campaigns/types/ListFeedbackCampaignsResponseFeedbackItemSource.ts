//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListFeedbackCampaignsResponseFeedbackItemSource: core.serialization.Schema<
    serializers.ListFeedbackCampaignsResponseFeedbackItemSource.Raw,
    Mailchimp.ListFeedbackCampaignsResponseFeedbackItemSource
> = core.serialization.enum_(["api", "email", "sms", "web", "ios", "android"]);

export declare namespace ListFeedbackCampaignsResponseFeedbackItemSource {
    export type Raw = "api" | "email" | "sms" | "web" | "ios" | "android";
}
