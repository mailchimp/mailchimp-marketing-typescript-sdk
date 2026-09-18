//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateMemberListsRequestMergeFieldsValueAddr1 } from "./UpdateMemberListsRequestMergeFieldsValueAddr1.js";

export const UpdateMemberListsRequestMergeFieldsValue: core.serialization.Schema<
    serializers.UpdateMemberListsRequestMergeFieldsValue.Raw,
    Mailchimp.UpdateMemberListsRequestMergeFieldsValue
> = core.serialization.undiscriminatedUnion([
    UpdateMemberListsRequestMergeFieldsValueAddr1,
    core.serialization.string(),
    core.serialization.number(),
]);

export declare namespace UpdateMemberListsRequestMergeFieldsValue {
    export type Raw = UpdateMemberListsRequestMergeFieldsValueAddr1.Raw | string | number;
}
