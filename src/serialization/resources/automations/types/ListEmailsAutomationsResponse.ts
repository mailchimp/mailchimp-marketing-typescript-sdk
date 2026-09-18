//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { AutomationWorkflowEmail } from "../../../types/AutomationWorkflowEmail.js";
import { ListEmailsAutomationsResponseLinksItemItem } from "./ListEmailsAutomationsResponseLinksItemItem.js";

export const ListEmailsAutomationsResponse: core.serialization.ObjectSchema<
    serializers.ListEmailsAutomationsResponse.Raw,
    Mailchimp.ListEmailsAutomationsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(core.serialization.list(ListEmailsAutomationsResponseLinksItemItem)).optional(),
    ),
    emails: core.serialization.list(AutomationWorkflowEmail).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListEmailsAutomationsResponse {
    export interface Raw {
        _links?: ListEmailsAutomationsResponseLinksItemItem.Raw[][] | null;
        emails?: AutomationWorkflowEmail.Raw[] | null;
        total_items?: number | null;
    }
}
