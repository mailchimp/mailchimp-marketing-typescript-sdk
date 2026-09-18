//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AutomationWorkflowEmailDelayAction: core.serialization.Schema<
    serializers.AutomationWorkflowEmailDelayAction.Raw,
    Mailchimp.AutomationWorkflowEmailDelayAction
> = core.serialization.enum_([
    "previous_campaign_sent",
    "previous_campaign_opened",
    "previous_campaign_not_opened",
    "previous_campaign_clicked_any",
    "previous_campaign_not_clicked_any",
    "previous_campaign_specific_clicked",
    "ecomm_bought_any",
    "ecomm_bought_product",
    "ecomm_bought_category",
    "ecomm_not_bought_any",
    "ecomm_abandoned_cart",
    "campaign_sent",
    "opened_email",
    "not_opened_email",
    "clicked_email",
    "not_clicked_email",
    "campaign_specific_clicked",
    "manual",
    "signup",
    "merge_changed",
    "group_add",
    "group_remove",
    "mandrill_sent",
    "mandrill_opened",
    "mandrill_clicked",
    "mandrill_any",
    "api",
    "goal",
    "annual",
    "birthday",
    "date",
    "date_added",
    "tag_add",
]);

export declare namespace AutomationWorkflowEmailDelayAction {
    export type Raw =
        | "previous_campaign_sent"
        | "previous_campaign_opened"
        | "previous_campaign_not_opened"
        | "previous_campaign_clicked_any"
        | "previous_campaign_not_clicked_any"
        | "previous_campaign_specific_clicked"
        | "ecomm_bought_any"
        | "ecomm_bought_product"
        | "ecomm_bought_category"
        | "ecomm_not_bought_any"
        | "ecomm_abandoned_cart"
        | "campaign_sent"
        | "opened_email"
        | "not_opened_email"
        | "clicked_email"
        | "not_clicked_email"
        | "campaign_specific_clicked"
        | "manual"
        | "signup"
        | "merge_changed"
        | "group_add"
        | "group_remove"
        | "mandrill_sent"
        | "mandrill_opened"
        | "mandrill_clicked"
        | "mandrill_any"
        | "api"
        | "goal"
        | "annual"
        | "birthday"
        | "date"
        | "date_added"
        | "tag_add";
}
