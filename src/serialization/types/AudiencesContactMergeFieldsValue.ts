//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AudiencesContactMergeFieldsValueAddr1 } from "./AudiencesContactMergeFieldsValueAddr1.js";

export const AudiencesContactMergeFieldsValue: core.serialization.Schema<
    serializers.AudiencesContactMergeFieldsValue.Raw,
    Mailchimp.AudiencesContactMergeFieldsValue
> = core.serialization.undiscriminatedUnion([
    AudiencesContactMergeFieldsValueAddr1,
    core.serialization.string(),
    core.serialization.number(),
]);

export declare namespace AudiencesContactMergeFieldsValue {
    export type Raw = AudiencesContactMergeFieldsValueAddr1.Raw | string | number;
}
