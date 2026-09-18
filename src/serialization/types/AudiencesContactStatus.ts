//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AudiencesContactStatus: core.serialization.Schema<
    serializers.AudiencesContactStatus.Raw,
    Mailchimp.AudiencesContactStatus
> = core.serialization.enum_(["active", "archived"]);

export declare namespace AudiencesContactStatus {
    export type Raw = "active" | "archived";
}
