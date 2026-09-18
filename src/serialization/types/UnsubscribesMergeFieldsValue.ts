//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { UnsubscribesMergeFieldsValueAddr1 } from "./UnsubscribesMergeFieldsValueAddr1.js";

export const UnsubscribesMergeFieldsValue: core.serialization.Schema<
    serializers.UnsubscribesMergeFieldsValue.Raw,
    Mailchimp.UnsubscribesMergeFieldsValue
> = core.serialization.undiscriminatedUnion([
    UnsubscribesMergeFieldsValueAddr1,
    core.serialization.string(),
    core.serialization.number(),
]);

export declare namespace UnsubscribesMergeFieldsValue {
    export type Raw = UnsubscribesMergeFieldsValueAddr1.Raw | string | number;
}
