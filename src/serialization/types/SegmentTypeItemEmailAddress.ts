//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemEmailAddressField } from "./SegmentTypeItemEmailAddressField.js";
import { SegmentTypeItemEmailAddressOp } from "./SegmentTypeItemEmailAddressOp.js";

export const SegmentTypeItemEmailAddress: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemEmailAddress.Raw,
    Mailchimp.SegmentTypeItemEmailAddress
> = core.serialization.object({
    field: SegmentTypeItemEmailAddressField,
    op: SegmentTypeItemEmailAddressOp,
    value: core.serialization.string().optional(),
});

export declare namespace SegmentTypeItemEmailAddress {
    export interface Raw {
        field: SegmentTypeItemEmailAddressField.Raw;
        op: SegmentTypeItemEmailAddressOp.Raw;
        value?: string | null;
    }
}
