//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const GetAudienceContactListRequestSortDir: core.serialization.Schema<
    serializers.GetAudienceContactListRequestSortDir.Raw,
    Mailchimp.GetAudienceContactListRequestSortDir
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace GetAudienceContactListRequestSortDir {
    export type Raw = "ASC" | "DESC";
}
