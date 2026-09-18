//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const FacebookAdRecipientsSegmentOptsMatch: core.serialization.Schema<
    serializers.FacebookAdRecipientsSegmentOptsMatch.Raw,
    Mailchimp.FacebookAdRecipientsSegmentOptsMatch
> = core.serialization.enum_(["any", "all"]);

export declare namespace FacebookAdRecipientsSegmentOptsMatch {
    export type Raw = "any" | "all";
}
