//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListTemplatesRequestSortDir: core.serialization.Schema<
    serializers.ListTemplatesRequestSortDir.Raw,
    Mailchimp.ListTemplatesRequestSortDir
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ListTemplatesRequestSortDir {
    export type Raw = "ASC" | "DESC";
}
