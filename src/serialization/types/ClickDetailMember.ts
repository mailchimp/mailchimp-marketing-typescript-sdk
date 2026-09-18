//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { ClickDetailMemberLinksItem } from "./ClickDetailMemberLinksItem.js";
import { ClickDetailMemberMergeFieldsValue } from "./ClickDetailMemberMergeFieldsValue.js";

export const ClickDetailMember: core.serialization.ObjectSchema<
    serializers.ClickDetailMember.Raw,
    Mailchimp.ClickDetailMember
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ClickDetailMemberLinksItem).optional()),
    campaignId: core.serialization.property("campaign_id", core.serialization.string().optional()),
    clicks: core.serialization.number().optional(),
    contactStatus: core.serialization.property("contact_status", core.serialization.string().optional()),
    emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
    emailId: core.serialization.property("email_id", core.serialization.string().optional()),
    listId: core.serialization.property("list_id", core.serialization.string().optional()),
    listIsActive: core.serialization.property("list_is_active", core.serialization.boolean().optional()),
    mergeFields: core.serialization.property(
        "merge_fields",
        core.serialization.record(core.serialization.string(), ClickDetailMemberMergeFieldsValue).optional(),
    ),
    urlId: core.serialization.property("url_id", core.serialization.string().optional()),
    vip: core.serialization.boolean().optional(),
});

export declare namespace ClickDetailMember {
    export interface Raw {
        _links?: ClickDetailMemberLinksItem.Raw[] | null;
        campaign_id?: string | null;
        clicks?: number | null;
        contact_status?: string | null;
        email_address?: string | null;
        email_id?: string | null;
        list_id?: string | null;
        list_is_active?: boolean | null;
        merge_fields?: Record<string, ClickDetailMemberMergeFieldsValue.Raw> | null;
        url_id?: string | null;
        vip?: boolean | null;
    }
}
