//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateCampaignsRequestContentType: core.serialization.Schema<
    serializers.CreateCampaignsRequestContentType.Raw,
    Mailchimp.CreateCampaignsRequestContentType
> = core.serialization.enum_(["template", "multichannel"]);

export declare namespace CreateCampaignsRequestContentType {
    export type Raw = "template" | "multichannel";
}
