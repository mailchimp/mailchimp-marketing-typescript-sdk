//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateCampaignsRequestRecipientsSegmentOptsMatch: core.serialization.Schema<
    serializers.CreateCampaignsRequestRecipientsSegmentOptsMatch.Raw,
    Mailchimp.CreateCampaignsRequestRecipientsSegmentOptsMatch
> = core.serialization.enum_(["any", "all"]);

export declare namespace CreateCampaignsRequestRecipientsSegmentOptsMatch {
    export type Raw = "any" | "all";
}
