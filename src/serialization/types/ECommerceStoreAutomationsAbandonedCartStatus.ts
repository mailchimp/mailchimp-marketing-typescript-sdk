//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ECommerceStoreAutomationsAbandonedCartStatus: core.serialization.Schema<
    serializers.ECommerceStoreAutomationsAbandonedCartStatus.Raw,
    Mailchimp.ECommerceStoreAutomationsAbandonedCartStatus
> = core.serialization.enum_(["save", "sending", "paused"]);

export declare namespace ECommerceStoreAutomationsAbandonedCartStatus {
    export type Raw = "save" | "sending" | "paused";
}
