//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateEmailAutomationsRequestDelayAction } from "./UpdateEmailAutomationsRequestDelayAction.js";
import { UpdateEmailAutomationsRequestDelayDirection } from "./UpdateEmailAutomationsRequestDelayDirection.js";
import { UpdateEmailAutomationsRequestDelayType } from "./UpdateEmailAutomationsRequestDelayType.js";

export const UpdateEmailAutomationsRequestDelay: core.serialization.ObjectSchema<
    serializers.UpdateEmailAutomationsRequestDelay.Raw,
    Mailchimp.UpdateEmailAutomationsRequestDelay
> = core.serialization.object({
    action: UpdateEmailAutomationsRequestDelayAction,
    amount: core.serialization.number().optional(),
    direction: UpdateEmailAutomationsRequestDelayDirection.optional(),
    type: UpdateEmailAutomationsRequestDelayType.optional(),
});

export declare namespace UpdateEmailAutomationsRequestDelay {
    export interface Raw {
        action: UpdateEmailAutomationsRequestDelayAction.Raw;
        amount?: number | null;
        direction?: UpdateEmailAutomationsRequestDelayDirection.Raw | null;
        type?: UpdateEmailAutomationsRequestDelayType.Raw | null;
    }
}
