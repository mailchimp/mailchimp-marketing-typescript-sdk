//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemEmailClientField: core.serialization.Schema<
    serializers.SegmentTypeItemEmailClientField.Raw,
    Mailchimp.SegmentTypeItemEmailClientField
> = core.serialization.enum_(["email_client"]);

export declare namespace SegmentTypeItemEmailClientField {
    export type Raw = "email_client";
}
