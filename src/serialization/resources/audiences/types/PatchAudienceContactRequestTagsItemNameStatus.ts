//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const PatchAudienceContactRequestTagsItemNameStatus: core.serialization.Schema<
    serializers.PatchAudienceContactRequestTagsItemNameStatus.Raw,
    Mailchimp.PatchAudienceContactRequestTagsItemNameStatus
> = core.serialization.enum_(["active", "inactive"]);

export declare namespace PatchAudienceContactRequestTagsItemNameStatus {
    export type Raw = "active" | "inactive";
}
