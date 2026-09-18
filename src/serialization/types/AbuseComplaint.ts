//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AbuseComplaintLinksItem } from "./AbuseComplaintLinksItem.js";
import { AbuseComplaintMergeFieldsValue } from "./AbuseComplaintMergeFieldsValue.js";

export const AbuseComplaint: core.serialization.ObjectSchema<serializers.AbuseComplaint.Raw, Mailchimp.AbuseComplaint> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(AbuseComplaintLinksItem).optional()),
        campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
        date: core.serialization.date().optional(),
        emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
        emailId: core.serialization.property("email_id", core.serialization.string().optional()),
        id: core.serialization.number().optional(),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        listIsActive: core.serialization.property("list_is_active", core.serialization.boolean().optional()),
        mergeFields: core.serialization.property(
            "merge_fields",
            core.serialization.record(core.serialization.string(), AbuseComplaintMergeFieldsValue).optional(),
        ),
        vip: core.serialization.boolean().optional(),
    });

export declare namespace AbuseComplaint {
    export interface Raw {
        _links?: AbuseComplaintLinksItem.Raw[] | null;
        campaign_id?: string | null;
        date?: string | null;
        email_address?: string | null;
        email_id?: string | null;
        id?: number | null;
        list_id?: string | null;
        list_is_active?: boolean | null;
        merge_fields?: Record<string, AbuseComplaintMergeFieldsValue.Raw> | null;
        vip?: boolean | null;
    }
}
