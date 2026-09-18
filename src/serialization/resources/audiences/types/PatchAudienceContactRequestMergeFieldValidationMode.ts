//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const PatchAudienceContactRequestMergeFieldValidationMode: core.serialization.Schema<
    serializers.PatchAudienceContactRequestMergeFieldValidationMode.Raw,
    Mailchimp.PatchAudienceContactRequestMergeFieldValidationMode
> = core.serialization.enum_(["ignore_required_checks", "strict"]);

export declare namespace PatchAudienceContactRequestMergeFieldValidationMode {
    export type Raw = "ignore_required_checks" | "strict";
}
