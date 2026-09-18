//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SubscriberRemovedFromAutomationWorkflowLinksItemItem } from "./SubscriberRemovedFromAutomationWorkflowLinksItemItem.js";

export const SubscriberRemovedFromAutomationWorkflow: core.serialization.ObjectSchema<
    serializers.SubscriberRemovedFromAutomationWorkflow.Raw,
    Mailchimp.SubscriberRemovedFromAutomationWorkflow
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization
            .list(core.serialization.list(SubscriberRemovedFromAutomationWorkflowLinksItemItem))
            .optional(),
    ),
    emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
    id: core.serialization.string().optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    workflowId: core.serialization.property("workflow_id", core.serialization.string().optional()),
});

export declare namespace SubscriberRemovedFromAutomationWorkflow {
    export interface Raw {
        _links?: SubscriberRemovedFromAutomationWorkflowLinksItemItem.Raw[][] | null;
        email_address?: string | null;
        id?: string | null;
        list_id?: string | null;
        workflow_id?: string | null;
    }
}
