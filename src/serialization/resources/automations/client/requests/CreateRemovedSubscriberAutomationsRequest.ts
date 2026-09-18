//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateRemovedSubscriberAutomationsRequest: core.serialization.Schema<
    serializers.CreateRemovedSubscriberAutomationsRequest.Raw,
    Omit<Mailchimp.CreateRemovedSubscriberAutomationsRequest, "workflowId">
> = core.serialization.object({
    emailAddress: core.serialization.property("email_address", core.serialization.string()),
});

export declare namespace CreateRemovedSubscriberAutomationsRequest {
    export interface Raw {
        email_address: string;
    }
}
