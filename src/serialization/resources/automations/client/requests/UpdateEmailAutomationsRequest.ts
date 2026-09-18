//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpdateEmailAutomationsRequestDelay } from "../../types/UpdateEmailAutomationsRequestDelay.js";
import { UpdateEmailAutomationsRequestSettings } from "../../types/UpdateEmailAutomationsRequestSettings.js";

export const UpdateEmailAutomationsRequest: core.serialization.Schema<
    serializers.UpdateEmailAutomationsRequest.Raw,
    Omit<Mailchimp.UpdateEmailAutomationsRequest, "workflowId" | "workflowEmailId">
> = core.serialization.object({
    delay: UpdateEmailAutomationsRequestDelay.optional(),
    settings: UpdateEmailAutomationsRequestSettings.optional(),
});

export declare namespace UpdateEmailAutomationsRequest {
    export interface Raw {
        delay?: UpdateEmailAutomationsRequestDelay.Raw | null;
        settings?: UpdateEmailAutomationsRequestSettings.Raw | null;
    }
}
