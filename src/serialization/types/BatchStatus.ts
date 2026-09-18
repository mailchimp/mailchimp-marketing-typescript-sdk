//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const BatchStatus: core.serialization.Schema<serializers.BatchStatus.Raw, Mailchimp.BatchStatus> =
    core.serialization.enum_(["pending", "preprocessing", "started", "finalizing", "finished"]);

export declare namespace BatchStatus {
    export type Raw = "pending" | "preprocessing" | "started" | "finalizing" | "finished";
}
