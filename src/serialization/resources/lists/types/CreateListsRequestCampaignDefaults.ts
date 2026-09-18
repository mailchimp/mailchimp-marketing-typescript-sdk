//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateListsRequestCampaignDefaults: core.serialization.ObjectSchema<
    serializers.CreateListsRequestCampaignDefaults.Raw,
    Mailchimp.CreateListsRequestCampaignDefaults
> = core.serialization.object({
    fromEmail: core.serialization.property("from_email", core.serialization.string()),
    fromName: core.serialization.property("from_name", core.serialization.string()),
    language: core.serialization.string(),
    subject: core.serialization.string(),
});

export declare namespace CreateListsRequestCampaignDefaults {
    export interface Raw {
        from_email: string;
        from_name: string;
        language: string;
        subject: string;
    }
}
