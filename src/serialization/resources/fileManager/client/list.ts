//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListFileManagerResponseItem } from "../types/ListFileManagerResponseItem.js";

export const Response: core.serialization.Schema<
    serializers.fileManager.list.Response.Raw,
    Mailchimp.ListFileManagerResponseItem[]
> = core.serialization.list(ListFileManagerResponseItem);

export declare namespace Response {
    export type Raw = ListFileManagerResponseItem.Raw[];
}
