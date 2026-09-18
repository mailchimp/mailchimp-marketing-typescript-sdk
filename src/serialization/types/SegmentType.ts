//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItem } from "./SegmentTypeItem.js";

export const SegmentType: core.serialization.Schema<serializers.SegmentType.Raw, Mailchimp.SegmentType> =
    core.serialization.list(SegmentTypeItem);

export declare namespace SegmentType {
    export type Raw = SegmentTypeItem.Raw[];
}
