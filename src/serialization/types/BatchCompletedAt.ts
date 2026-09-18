//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { BatchCompletedAtOne } from "./BatchCompletedAtOne.js";

export const BatchCompletedAt: core.serialization.Schema<serializers.BatchCompletedAt.Raw, Mailchimp.BatchCompletedAt> =
    core.serialization.undiscriminatedUnion([core.serialization.date(), BatchCompletedAtOne]);

export declare namespace BatchCompletedAt {
    export type Raw = string | BatchCompletedAtOne.Raw;
}
