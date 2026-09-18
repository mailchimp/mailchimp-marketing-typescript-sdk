//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpsertMemberListsRequestLocation } from "../../types/UpsertMemberListsRequestLocation.js";
import { UpsertMemberListsRequestMarketingPermissionsItem } from "../../types/UpsertMemberListsRequestMarketingPermissionsItem.js";
import { UpsertMemberListsRequestMergeFieldsValue } from "../../types/UpsertMemberListsRequestMergeFieldsValue.js";
import { UpsertMemberListsRequestStatus } from "../../types/UpsertMemberListsRequestStatus.js";
import { UpsertMemberListsRequestStatusIfNew } from "../../types/UpsertMemberListsRequestStatusIfNew.js";
import { UpsertMemberListsRequestTimestampOpt } from "../../types/UpsertMemberListsRequestTimestampOpt.js";
import { UpsertMemberListsRequestTimestampSignup } from "../../types/UpsertMemberListsRequestTimestampSignup.js";

export const UpsertMemberListsRequest: core.serialization.Schema<
    serializers.UpsertMemberListsRequest.Raw,
    Omit<Mailchimp.UpsertMemberListsRequest, "listId" | "subscriberHash" | "skipMergeValidation">
> = core.serialization.object({
    emailAddress: core.serialization.property("email_address", core.serialization.string()),
    emailType: core.serialization.property("email_type", core.serialization.string().optional()),
    interests: core.serialization.record(core.serialization.string(), core.serialization.boolean()).optional(),
    ipOpt: core.serialization.property("ip_opt", core.serialization.string().optional()),
    ipSignup: core.serialization.property("ip_signup", core.serialization.string().optional()),
    language: core.serialization.string().optional(),
    location: UpsertMemberListsRequestLocation.optional(),
    marketingPermissions: core.serialization.property(
        "marketing_permissions",
        core.serialization.list(UpsertMemberListsRequestMarketingPermissionsItem).optional(),
    ),
    mergeFields: core.serialization.property(
        "merge_fields",
        core.serialization.record(core.serialization.string(), UpsertMemberListsRequestMergeFieldsValue).optional(),
    ),
    status: UpsertMemberListsRequestStatus.optional(),
    statusIfNew: core.serialization.property("status_if_new", UpsertMemberListsRequestStatusIfNew.optional()),
    tags: core.serialization.list(core.serialization.string()).optional(),
    timestampOpt: core.serialization.property("timestamp_opt", UpsertMemberListsRequestTimestampOpt.optional()),
    timestampSignup: core.serialization.property(
        "timestamp_signup",
        UpsertMemberListsRequestTimestampSignup.optional(),
    ),
    vip: core.serialization.boolean().optional(),
});

export declare namespace UpsertMemberListsRequest {
    export interface Raw {
        email_address: string;
        email_type?: string | null;
        interests?: Record<string, boolean> | null;
        ip_opt?: string | null;
        ip_signup?: string | null;
        language?: string | null;
        location?: UpsertMemberListsRequestLocation.Raw | null;
        marketing_permissions?: UpsertMemberListsRequestMarketingPermissionsItem.Raw[] | null;
        merge_fields?: Record<string, UpsertMemberListsRequestMergeFieldsValue.Raw> | null;
        status?: UpsertMemberListsRequestStatus.Raw | null;
        status_if_new?: UpsertMemberListsRequestStatusIfNew.Raw | null;
        tags?: string[] | null;
        timestamp_opt?: UpsertMemberListsRequestTimestampOpt.Raw | null;
        timestamp_signup?: UpsertMemberListsRequestTimestampSignup.Raw | null;
        vip?: boolean | null;
    }
}
