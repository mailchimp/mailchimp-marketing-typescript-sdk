//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateCampaignsRequestVariateSettingsSendTimesItem: core.serialization.Schema<
    serializers.CreateCampaignsRequestVariateSettingsSendTimesItem.Raw,
    Mailchimp.CreateCampaignsRequestVariateSettingsSendTimesItem
> = core.serialization.undiscriminatedUnion([core.serialization.date(), core.serialization.string()]);

export declare namespace CreateCampaignsRequestVariateSettingsSendTimesItem {
    export type Raw = string | string;
}
