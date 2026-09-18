//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateAudienceContactRequestTagsItemNameStatus: core.serialization.Schema<
    serializers.CreateAudienceContactRequestTagsItemNameStatus.Raw,
    Mailchimp.CreateAudienceContactRequestTagsItemNameStatus
> = core.serialization.enum_(["active", "inactive"]);

export declare namespace CreateAudienceContactRequestTagsItemNameStatus {
    export type Raw = "active" | "inactive";
}
