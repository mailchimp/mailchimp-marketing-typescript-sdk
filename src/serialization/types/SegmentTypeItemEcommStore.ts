//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemEcommStoreField } from "./SegmentTypeItemEcommStoreField.js";
import { SegmentTypeItemEcommStoreOp } from "./SegmentTypeItemEcommStoreOp.js";

export const SegmentTypeItemEcommStore: core.serialization.ObjectSchema<
    serializers.SegmentTypeItemEcommStore.Raw,
    Mailchimp.SegmentTypeItemEcommStore
> = core.serialization.object({
    field: SegmentTypeItemEcommStoreField.optional(),
    op: SegmentTypeItemEcommStoreOp.optional(),
    value: core.serialization.string().optional(),
});

export declare namespace SegmentTypeItemEcommStore {
    export interface Raw {
        field?: SegmentTypeItemEcommStoreField.Raw | null;
        op?: SegmentTypeItemEcommStoreOp.Raw | null;
        value?: string | null;
    }
}
