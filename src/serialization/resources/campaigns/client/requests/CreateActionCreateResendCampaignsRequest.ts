//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateActionCreateResendCampaignsRequestShortcutType } from "../../types/CreateActionCreateResendCampaignsRequestShortcutType.js";

export const CreateActionCreateResendCampaignsRequest: core.serialization.Schema<
    serializers.CreateActionCreateResendCampaignsRequest.Raw,
    Omit<Mailchimp.CreateActionCreateResendCampaignsRequest, "campaignId">
> = core.serialization.object({
    shortcutType: core.serialization.property(
        "shortcut_type",
        CreateActionCreateResendCampaignsRequestShortcutType.optional(),
    ),
});

export declare namespace CreateActionCreateResendCampaignsRequest {
    export interface Raw {
        shortcut_type?: CreateActionCreateResendCampaignsRequestShortcutType.Raw | null;
    }
}
