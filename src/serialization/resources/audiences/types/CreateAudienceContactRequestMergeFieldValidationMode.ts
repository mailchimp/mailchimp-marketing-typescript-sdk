//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateAudienceContactRequestMergeFieldValidationMode: core.serialization.Schema<
    serializers.CreateAudienceContactRequestMergeFieldValidationMode.Raw,
    Mailchimp.CreateAudienceContactRequestMergeFieldValidationMode
> = core.serialization.enum_(["ignore_required_checks", "strict"]);

export declare namespace CreateAudienceContactRequestMergeFieldValidationMode {
    export type Raw = "ignore_required_checks" | "strict";
}
