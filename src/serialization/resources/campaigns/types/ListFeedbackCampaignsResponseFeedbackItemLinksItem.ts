//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListFeedbackCampaignsResponseFeedbackItemLinksItemMethod } from "./ListFeedbackCampaignsResponseFeedbackItemLinksItemMethod.js";

export const ListFeedbackCampaignsResponseFeedbackItemLinksItem: core.serialization.ObjectSchema<
    serializers.ListFeedbackCampaignsResponseFeedbackItemLinksItem.Raw,
    Mailchimp.ListFeedbackCampaignsResponseFeedbackItemLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListFeedbackCampaignsResponseFeedbackItemLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListFeedbackCampaignsResponseFeedbackItemLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListFeedbackCampaignsResponseFeedbackItemLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
