//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListCampaignsRequestType: core.serialization.Schema<
    serializers.ListCampaignsRequestType.Raw,
    Mailchimp.ListCampaignsRequestType
> = core.serialization.enum_(["regular", "plaintext", "absplit", "rss", "variate"]);

export declare namespace ListCampaignsRequestType {
    export type Raw = "regular" | "plaintext" | "absplit" | "rss" | "variate";
}
