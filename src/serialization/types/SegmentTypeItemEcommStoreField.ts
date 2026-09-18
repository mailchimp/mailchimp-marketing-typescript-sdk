//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemEcommStoreField: core.serialization.Schema<
    serializers.SegmentTypeItemEcommStoreField.Raw,
    Mailchimp.SegmentTypeItemEcommStoreField
> = core.serialization.enum_(["ecomm_store"]);

export declare namespace SegmentTypeItemEcommStoreField {
    export type Raw = "ecomm_store";
}
