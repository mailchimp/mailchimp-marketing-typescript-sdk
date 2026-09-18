//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AutomationWorkflowLinksItemMethod } from "./AutomationWorkflowLinksItemMethod.js";

export const AutomationWorkflowLinksItem: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowLinksItem.Raw,
    Mailchimp.AutomationWorkflowLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: AutomationWorkflowLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace AutomationWorkflowLinksItem {
    export interface Raw {
        href?: string | null;
        method?: AutomationWorkflowLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
