//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SentToMergeFieldsValueAddr1 } from "./SentToMergeFieldsValueAddr1.js";

export const SentToMergeFieldsValue: core.serialization.Schema<
    serializers.SentToMergeFieldsValue.Raw,
    Mailchimp.SentToMergeFieldsValue
> = core.serialization.undiscriminatedUnion([
    SentToMergeFieldsValueAddr1,
    core.serialization.string(),
    core.serialization.number(),
]);

export declare namespace SentToMergeFieldsValue {
    export type Raw = SentToMergeFieldsValueAddr1.Raw | string | number;
}
