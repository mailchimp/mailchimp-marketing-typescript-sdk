//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateAudienceContactRequestDataMode: core.serialization.Schema<
    serializers.CreateAudienceContactRequestDataMode.Raw,
    Mailchimp.CreateAudienceContactRequestDataMode
> = core.serialization.enum_(["historical", "live"]);

export declare namespace CreateAudienceContactRequestDataMode {
    export type Raw = "historical" | "live";
}
