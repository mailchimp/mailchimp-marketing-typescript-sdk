//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AbTestingOptionsWaitUnits: core.serialization.Schema<
    serializers.AbTestingOptionsWaitUnits.Raw,
    Mailchimp.AbTestingOptionsWaitUnits
> = core.serialization.enum_(["hours", "days"]);

export declare namespace AbTestingOptionsWaitUnits {
    export type Raw = "hours" | "days";
}
