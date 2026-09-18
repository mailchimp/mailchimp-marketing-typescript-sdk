//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SubscriberRemovedFromAutomationWorkflowLinksItemItemMethod } from "./SubscriberRemovedFromAutomationWorkflowLinksItemItemMethod.js";

export const SubscriberRemovedFromAutomationWorkflowLinksItemItem: core.serialization.ObjectSchema<
    serializers.SubscriberRemovedFromAutomationWorkflowLinksItemItem.Raw,
    Mailchimp.SubscriberRemovedFromAutomationWorkflowLinksItemItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: SubscriberRemovedFromAutomationWorkflowLinksItemItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace SubscriberRemovedFromAutomationWorkflowLinksItemItem {
    export interface Raw {
        href?: string | null;
        method?: SubscriberRemovedFromAutomationWorkflowLinksItemItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
