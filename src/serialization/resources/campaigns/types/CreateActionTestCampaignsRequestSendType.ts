//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateActionTestCampaignsRequestSendType: core.serialization.Schema<
    serializers.CreateActionTestCampaignsRequestSendType.Raw,
    Mailchimp.CreateActionTestCampaignsRequestSendType
> = core.serialization.enum_(["html", "plaintext"]);

export declare namespace CreateActionTestCampaignsRequestSendType {
    export type Raw = "html" | "plaintext";
}
