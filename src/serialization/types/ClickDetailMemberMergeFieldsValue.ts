//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ClickDetailMemberMergeFieldsValueAddr1 } from "./ClickDetailMemberMergeFieldsValueAddr1.js";

export const ClickDetailMemberMergeFieldsValue: core.serialization.Schema<
    serializers.ClickDetailMemberMergeFieldsValue.Raw,
    Mailchimp.ClickDetailMemberMergeFieldsValue
> = core.serialization.undiscriminatedUnion([
    ClickDetailMemberMergeFieldsValueAddr1,
    core.serialization.string(),
    core.serialization.number(),
]);

export declare namespace ClickDetailMemberMergeFieldsValue {
    export type Raw = ClickDetailMemberMergeFieldsValueAddr1.Raw | string | number;
}
