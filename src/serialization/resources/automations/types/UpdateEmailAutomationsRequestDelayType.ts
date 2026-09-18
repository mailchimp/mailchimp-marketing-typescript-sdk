//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateEmailAutomationsRequestDelayType: core.serialization.Schema<
    serializers.UpdateEmailAutomationsRequestDelayType.Raw,
    Mailchimp.UpdateEmailAutomationsRequestDelayType
> = core.serialization.enum_(["now", "day", "hour", "week"]);

export declare namespace UpdateEmailAutomationsRequestDelayType {
    export type Raw = "now" | "day" | "hour" | "week";
}
