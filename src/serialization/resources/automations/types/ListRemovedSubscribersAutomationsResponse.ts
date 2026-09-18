//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { SubscriberRemovedFromAutomationWorkflow } from "../../../types/SubscriberRemovedFromAutomationWorkflow.js";
import { ListRemovedSubscribersAutomationsResponseLinksItemItem } from "./ListRemovedSubscribersAutomationsResponseLinksItemItem.js";

export const ListRemovedSubscribersAutomationsResponse: core.serialization.ObjectSchema<
    serializers.ListRemovedSubscribersAutomationsResponse.Raw,
    Mailchimp.ListRemovedSubscribersAutomationsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization
            .list(core.serialization.list(ListRemovedSubscribersAutomationsResponseLinksItemItem))
            .optional(),
    ),
    subscribers: core.serialization.list(SubscriberRemovedFromAutomationWorkflow).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
    workflowId: core.serialization.property("workflow_id", core.serialization.string().optional()),
});

export declare namespace ListRemovedSubscribersAutomationsResponse {
    export interface Raw {
        _links?: ListRemovedSubscribersAutomationsResponseLinksItemItem.Raw[][] | null;
        subscribers?: SubscriberRemovedFromAutomationWorkflow.Raw[] | null;
        total_items?: number | null;
        workflow_id?: string | null;
    }
}
