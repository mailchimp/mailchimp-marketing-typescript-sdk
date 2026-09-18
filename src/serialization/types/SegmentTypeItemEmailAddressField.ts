//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemEmailAddressField: core.serialization.Schema<
    serializers.SegmentTypeItemEmailAddressField.Raw,
    Mailchimp.SegmentTypeItemEmailAddressField
> = core.serialization.enum_(["merge0", "EMAIL"]);

export declare namespace SegmentTypeItemEmailAddressField {
    export type Raw = "merge0" | "EMAIL";
}
