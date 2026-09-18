//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListCampaignsRequestSortDir: core.serialization.Schema<
    serializers.ListCampaignsRequestSortDir.Raw,
    Mailchimp.ListCampaignsRequestSortDir
> = core.serialization.enum_(["ASC", "DESC"]);

export declare namespace ListCampaignsRequestSortDir {
    export type Raw = "ASC" | "DESC";
}
