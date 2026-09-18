//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AutomationWorkflowEmailLinksItemMethod } from "./AutomationWorkflowEmailLinksItemMethod.js";

export const AutomationWorkflowEmailLinksItem: core.serialization.ObjectSchema<
    serializers.AutomationWorkflowEmailLinksItem.Raw,
    Mailchimp.AutomationWorkflowEmailLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: AutomationWorkflowEmailLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace AutomationWorkflowEmailLinksItem {
    export interface Raw {
        href?: string | null;
        method?: AutomationWorkflowEmailLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
