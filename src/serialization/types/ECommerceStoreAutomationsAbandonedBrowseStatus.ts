//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ECommerceStoreAutomationsAbandonedBrowseStatus: core.serialization.Schema<
    serializers.ECommerceStoreAutomationsAbandonedBrowseStatus.Raw,
    Mailchimp.ECommerceStoreAutomationsAbandonedBrowseStatus
> = core.serialization.enum_(["save", "sending", "paused"]);

export declare namespace ECommerceStoreAutomationsAbandonedBrowseStatus {
    export type Raw = "save" | "sending" | "paused";
}
