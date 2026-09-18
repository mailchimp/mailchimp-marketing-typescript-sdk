//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const LandingPageStatus: core.serialization.Schema<
    serializers.LandingPageStatus.Raw,
    Mailchimp.LandingPageStatus
> = core.serialization.enum_(["published", "unpublished", "draft"]);

export declare namespace LandingPageStatus {
    export type Raw = "published" | "unpublished" | "draft";
}
