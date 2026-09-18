//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListAutomationsRequestStatus: core.serialization.Schema<
    serializers.ListAutomationsRequestStatus.Raw,
    Mailchimp.ListAutomationsRequestStatus
> = core.serialization.enum_(["save", "paused", "sending"]);

export declare namespace ListAutomationsRequestStatus {
    export type Raw = "save" | "paused" | "sending";
}
