//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateEmailAutomationsRequestDelayAction: core.serialization.Schema<
    serializers.UpdateEmailAutomationsRequestDelayAction.Raw,
    Mailchimp.UpdateEmailAutomationsRequestDelayAction
> = core.serialization.enum_(["signup", "ecomm_abandoned_browse", "ecomm_abandoned_cart"]);

export declare namespace UpdateEmailAutomationsRequestDelayAction {
    export type Raw = "signup" | "ecomm_abandoned_browse" | "ecomm_abandoned_cart";
}
