//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const FacebookAdStatus: core.serialization.Schema<serializers.FacebookAdStatus.Raw, Mailchimp.FacebookAdStatus> =
    core.serialization.enum_([
        "save",
        "paused",
        "schedule",
        "scheduled",
        "sending",
        "sent",
        "canceled",
        "canceling",
        "active",
        "disconnected",
        "somepaused",
        "draft",
        "completed",
        "partialRejected",
        "pending",
        "rejected",
        "published",
        "unpublished",
    ]);

export declare namespace FacebookAdStatus {
    export type Raw =
        | "save"
        | "paused"
        | "schedule"
        | "scheduled"
        | "sending"
        | "sent"
        | "canceled"
        | "canceling"
        | "active"
        | "disconnected"
        | "somepaused"
        | "draft"
        | "completed"
        | "partialRejected"
        | "pending"
        | "rejected"
        | "published"
        | "unpublished";
}
