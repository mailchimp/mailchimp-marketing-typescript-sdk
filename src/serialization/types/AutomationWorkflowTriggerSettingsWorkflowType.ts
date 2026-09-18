//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AutomationWorkflowTriggerSettingsWorkflowType: core.serialization.Schema<
    serializers.AutomationWorkflowTriggerSettingsWorkflowType.Raw,
    Mailchimp.AutomationWorkflowTriggerSettingsWorkflowType
> = core.serialization.enum_([
    "abandonedBrowse",
    "abandonedCart",
    "api",
    "bestCustomers",
    "categoryFollowup",
    "dateAdded",
    "emailFollowup",
    "emailSeries",
    "groupAdd",
    "groupRemove",
    "mandrill",
    "productFollowup",
    "purchaseFollowup",
    "recurringEvent",
    "specialEvent",
    "visitUrl",
    "welcomeSeries",
]);

export declare namespace AutomationWorkflowTriggerSettingsWorkflowType {
    export type Raw =
        | "abandonedBrowse"
        | "abandonedCart"
        | "api"
        | "bestCustomers"
        | "categoryFollowup"
        | "dateAdded"
        | "emailFollowup"
        | "emailSeries"
        | "groupAdd"
        | "groupRemove"
        | "mandrill"
        | "productFollowup"
        | "purchaseFollowup"
        | "recurringEvent"
        | "specialEvent"
        | "visitUrl"
        | "welcomeSeries";
}
