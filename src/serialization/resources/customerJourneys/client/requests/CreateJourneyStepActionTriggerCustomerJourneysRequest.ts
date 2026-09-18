//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";

export const CreateJourneyStepActionTriggerCustomerJourneysRequest: core.serialization.Schema<
    serializers.CreateJourneyStepActionTriggerCustomerJourneysRequest.Raw,
    Omit<Mailchimp.CreateJourneyStepActionTriggerCustomerJourneysRequest, "journeyId" | "stepId">
> = core.serialization.object({
    emailAddress: core.serialization.property("email_address", core.serialization.string()),
});

export declare namespace CreateJourneyStepActionTriggerCustomerJourneysRequest {
    export interface Raw {
        email_address: string;
    }
}
