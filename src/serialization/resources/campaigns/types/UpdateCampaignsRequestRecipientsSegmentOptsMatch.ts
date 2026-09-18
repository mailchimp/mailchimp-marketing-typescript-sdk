//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateCampaignsRequestRecipientsSegmentOptsMatch: core.serialization.Schema<
    serializers.UpdateCampaignsRequestRecipientsSegmentOptsMatch.Raw,
    Mailchimp.UpdateCampaignsRequestRecipientsSegmentOptsMatch
> = core.serialization.enum_(["any", "all"]);

export declare namespace UpdateCampaignsRequestRecipientsSegmentOptsMatch {
    export type Raw = "any" | "all";
}
