//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { PatchAudienceContactRequestMergeFieldsValueAddr1 } from "./PatchAudienceContactRequestMergeFieldsValueAddr1.js";

export const PatchAudienceContactRequestMergeFieldsValue: core.serialization.Schema<
    serializers.PatchAudienceContactRequestMergeFieldsValue.Raw,
    Mailchimp.PatchAudienceContactRequestMergeFieldsValue
> = core.serialization.undiscriminatedUnion([
    PatchAudienceContactRequestMergeFieldsValueAddr1,
    core.serialization.string(),
    core.serialization.number(),
]);

export declare namespace PatchAudienceContactRequestMergeFieldsValue {
    export type Raw = PatchAudienceContactRequestMergeFieldsValueAddr1.Raw | string | number;
}
