//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SubscriberInAutomationQueueLinksItemItem } from "./SubscriberInAutomationQueueLinksItemItem.js";

export const SubscriberInAutomationQueue: core.serialization.ObjectSchema<
    serializers.SubscriberInAutomationQueue.Raw,
    Mailchimp.SubscriberInAutomationQueue
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(core.serialization.list(SubscriberInAutomationQueueLinksItemItem)).optional(),
    ),
    emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
    emailId: core.serialization.property("email_id", core.serialization.string().optional()),
    id: core.serialization.string().optional(),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    listIsActive: core.serialization.property("list_is_active", core.serialization.boolean().optional()),
    nextSend: core.serialization.property("next_send", core.serialization.date().optional()),
    workflowId: core.serialization.property("workflow_id", core.serialization.string().optional()),
});

export declare namespace SubscriberInAutomationQueue {
    export interface Raw {
        _links?: SubscriberInAutomationQueueLinksItemItem.Raw[][] | null;
        email_address?: string | null;
        email_id?: string | null;
        id?: string | null;
        list_id?: string | null;
        list_is_active?: boolean | null;
        next_send?: string | null;
        workflow_id?: string | null;
    }
}
