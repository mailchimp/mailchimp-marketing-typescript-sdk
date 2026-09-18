//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateAutomationsRequestSettings: core.serialization.ObjectSchema<
    serializers.CreateAutomationsRequestSettings.Raw,
    Mailchimp.CreateAutomationsRequestSettings
> = core.serialization.object({
    fromName: core.serialization.property("from_name", core.serialization.string().optional()),
    replyTo: core.serialization.property("reply_to", core.serialization.string().optional()),
});

export declare namespace CreateAutomationsRequestSettings {
    export interface Raw {
        from_name?: string | null;
        reply_to?: string | null;
    }
}
