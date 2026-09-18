//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateEmailAutomationsRequestDelayDirection: core.serialization.Schema<
    serializers.UpdateEmailAutomationsRequestDelayDirection.Raw,
    Mailchimp.UpdateEmailAutomationsRequestDelayDirection
> = core.serialization.enum_(["after"]);

export declare namespace UpdateEmailAutomationsRequestDelayDirection {
    export type Raw = "after";
}
