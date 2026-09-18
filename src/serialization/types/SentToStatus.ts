//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SentToStatus: core.serialization.Schema<serializers.SentToStatus.Raw, Mailchimp.SentToStatus> =
    core.serialization.enum_(["sent", "hard", "soft"]);

export declare namespace SentToStatus {
    export type Raw = "sent" | "hard" | "soft";
}
