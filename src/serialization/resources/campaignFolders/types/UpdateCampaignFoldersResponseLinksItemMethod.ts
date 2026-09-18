//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateCampaignFoldersResponseLinksItemMethod: core.serialization.Schema<
    serializers.UpdateCampaignFoldersResponseLinksItemMethod.Raw,
    Mailchimp.UpdateCampaignFoldersResponseLinksItemMethod
> = core.serialization.enum_(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]);

export declare namespace UpdateCampaignFoldersResponseLinksItemMethod {
    export type Raw = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
}
