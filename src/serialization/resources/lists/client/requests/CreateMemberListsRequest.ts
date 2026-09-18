//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateMemberListsRequestLocation } from "../../types/CreateMemberListsRequestLocation.js";
import { CreateMemberListsRequestMarketingPermissionsItem } from "../../types/CreateMemberListsRequestMarketingPermissionsItem.js";
import { CreateMemberListsRequestMergeFieldsValue } from "../../types/CreateMemberListsRequestMergeFieldsValue.js";
import { CreateMemberListsRequestStatus } from "../../types/CreateMemberListsRequestStatus.js";
import { CreateMemberListsRequestTimestampOpt } from "../../types/CreateMemberListsRequestTimestampOpt.js";
import { CreateMemberListsRequestTimestampSignup } from "../../types/CreateMemberListsRequestTimestampSignup.js";

export const CreateMemberListsRequest: core.serialization.Schema<
    serializers.CreateMemberListsRequest.Raw,
    Omit<Mailchimp.CreateMemberListsRequest, "listId" | "skipMergeValidation">
> = core.serialization.object({
    emailAddress: core.serialization.property("email_address", core.serialization.string()),
    emailType: core.serialization.property("email_type", core.serialization.string().optional()),
    interests: core.serialization.record(core.serialization.string(), core.serialization.boolean()).optional(),
    ipOpt: core.serialization.property("ip_opt", core.serialization.string().optional()),
    ipSignup: core.serialization.property("ip_signup", core.serialization.string().optional()),
    language: core.serialization.string().optional(),
    location: CreateMemberListsRequestLocation.optional(),
    marketingPermissions: core.serialization.property(
        "marketing_permissions",
        core.serialization.list(CreateMemberListsRequestMarketingPermissionsItem).optional(),
    ),
    mergeFields: core.serialization.property(
        "merge_fields",
        core.serialization.record(core.serialization.string(), CreateMemberListsRequestMergeFieldsValue).optional(),
    ),
    status: CreateMemberListsRequestStatus,
    tags: core.serialization.list(core.serialization.string()).optional(),
    timestampOpt: core.serialization.property("timestamp_opt", CreateMemberListsRequestTimestampOpt.optional()),
    timestampSignup: core.serialization.property(
        "timestamp_signup",
        CreateMemberListsRequestTimestampSignup.optional(),
    ),
    vip: core.serialization.boolean().optional(),
});

export declare namespace CreateMemberListsRequest {
    export interface Raw {
        email_address: string;
        email_type?: string | null;
        interests?: Record<string, boolean> | null;
        ip_opt?: string | null;
        ip_signup?: string | null;
        language?: string | null;
        location?: CreateMemberListsRequestLocation.Raw | null;
        marketing_permissions?: CreateMemberListsRequestMarketingPermissionsItem.Raw[] | null;
        merge_fields?: Record<string, CreateMemberListsRequestMergeFieldsValue.Raw> | null;
        status: CreateMemberListsRequestStatus.Raw;
        tags?: string[] | null;
        timestamp_opt?: CreateMemberListsRequestTimestampOpt.Raw | null;
        timestamp_signup?: CreateMemberListsRequestTimestampSignup.Raw | null;
        vip?: boolean | null;
    }
}
