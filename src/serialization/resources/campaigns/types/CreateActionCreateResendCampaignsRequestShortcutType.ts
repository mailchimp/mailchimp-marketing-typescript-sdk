//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateActionCreateResendCampaignsRequestShortcutType: core.serialization.Schema<
    serializers.CreateActionCreateResendCampaignsRequestShortcutType.Raw,
    Mailchimp.CreateActionCreateResendCampaignsRequestShortcutType
> = core.serialization.enum_(["to_non_openers", "to_new_subscribers", "to_non_clickers", "to_non_purchasers"]);

export declare namespace CreateActionCreateResendCampaignsRequestShortcutType {
    export type Raw = "to_non_openers" | "to_new_subscribers" | "to_non_clickers" | "to_non_purchasers";
}
