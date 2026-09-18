//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateActionTestCampaignsRequestSendType } from "../../types/CreateActionTestCampaignsRequestSendType.js";

export const CreateActionTestCampaignsRequest: core.serialization.Schema<
    serializers.CreateActionTestCampaignsRequest.Raw,
    Omit<Mailchimp.CreateActionTestCampaignsRequest, "campaignId">
> = core.serialization.object({
    sendType: core.serialization.property("send_type", CreateActionTestCampaignsRequestSendType),
    testEmails: core.serialization.property("test_emails", core.serialization.list(core.serialization.string())),
});

export declare namespace CreateActionTestCampaignsRequest {
    export interface Raw {
        send_type: CreateActionTestCampaignsRequestSendType.Raw;
        test_emails: string[];
    }
}
