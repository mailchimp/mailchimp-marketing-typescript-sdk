//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { AutomationWorkflow } from "../../../types/AutomationWorkflow.js";
import { ListAutomationsResponseLinksItem } from "./ListAutomationsResponseLinksItem.js";

export const ListAutomationsResponse: core.serialization.ObjectSchema<
    serializers.ListAutomationsResponse.Raw,
    Mailchimp.ListAutomationsResponse
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ListAutomationsResponseLinksItem).optional()),
    automations: core.serialization.list(AutomationWorkflow).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListAutomationsResponse {
    export interface Raw {
        _links?: ListAutomationsResponseLinksItem.Raw[] | null;
        automations?: AutomationWorkflow.Raw[] | null;
        total_items?: number | null;
    }
}
