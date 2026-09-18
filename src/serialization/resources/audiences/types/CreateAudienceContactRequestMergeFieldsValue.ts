//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateAudienceContactRequestMergeFieldsValueAddr1 } from "./CreateAudienceContactRequestMergeFieldsValueAddr1.js";

export const CreateAudienceContactRequestMergeFieldsValue: core.serialization.Schema<
    serializers.CreateAudienceContactRequestMergeFieldsValue.Raw,
    Mailchimp.CreateAudienceContactRequestMergeFieldsValue
> = core.serialization.undiscriminatedUnion([
    CreateAudienceContactRequestMergeFieldsValueAddr1,
    core.serialization.string(),
    core.serialization.number(),
]);

export declare namespace CreateAudienceContactRequestMergeFieldsValue {
    export type Raw = CreateAudienceContactRequestMergeFieldsValueAddr1.Raw | string | number;
}
