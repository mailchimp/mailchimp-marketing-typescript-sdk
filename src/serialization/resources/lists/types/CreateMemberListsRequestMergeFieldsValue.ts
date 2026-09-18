//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateMemberListsRequestMergeFieldsValueAddr1 } from "./CreateMemberListsRequestMergeFieldsValueAddr1.js";

export const CreateMemberListsRequestMergeFieldsValue: core.serialization.Schema<
    serializers.CreateMemberListsRequestMergeFieldsValue.Raw,
    Mailchimp.CreateMemberListsRequestMergeFieldsValue
> = core.serialization.undiscriminatedUnion([
    CreateMemberListsRequestMergeFieldsValueAddr1,
    core.serialization.string(),
    core.serialization.number(),
]);

export declare namespace CreateMemberListsRequestMergeFieldsValue {
    export type Raw = CreateMemberListsRequestMergeFieldsValueAddr1.Raw | string | number;
}
