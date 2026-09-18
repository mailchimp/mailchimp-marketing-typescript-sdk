//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { UpdateMemberListsRequestLocation } from "../../types/UpdateMemberListsRequestLocation.js";
import { UpdateMemberListsRequestMarketingPermissionsItem } from "../../types/UpdateMemberListsRequestMarketingPermissionsItem.js";
import { UpdateMemberListsRequestMergeFieldsValue } from "../../types/UpdateMemberListsRequestMergeFieldsValue.js";
import { UpdateMemberListsRequestStatus } from "../../types/UpdateMemberListsRequestStatus.js";
import { UpdateMemberListsRequestTimestampOpt } from "../../types/UpdateMemberListsRequestTimestampOpt.js";
import { UpdateMemberListsRequestTimestampSignup } from "../../types/UpdateMemberListsRequestTimestampSignup.js";

export const UpdateMemberListsRequest: core.serialization.Schema<
    serializers.UpdateMemberListsRequest.Raw,
    Omit<Mailchimp.UpdateMemberListsRequest, "listId" | "subscriberHash" | "skipMergeValidation">
> = core.serialization.object({
    emailAddress: core.serialization.property("email_address", core.serialization.string().optional()),
    emailType: core.serialization.property("email_type", core.serialization.string().optional()),
    interests: core.serialization.record(core.serialization.string(), core.serialization.boolean()).optional(),
    ipOpt: core.serialization.property("ip_opt", core.serialization.string().optional()),
    ipSignup: core.serialization.property("ip_signup", core.serialization.string().optional()),
    language: core.serialization.string().optional(),
    location: UpdateMemberListsRequestLocation.optional(),
    marketingPermissions: core.serialization.property(
        "marketing_permissions",
        core.serialization.list(UpdateMemberListsRequestMarketingPermissionsItem).optional(),
    ),
    mergeFields: core.serialization.property(
        "merge_fields",
        core.serialization.record(core.serialization.string(), UpdateMemberListsRequestMergeFieldsValue).optional(),
    ),
    status: UpdateMemberListsRequestStatus.optional(),
    timestampOpt: core.serialization.property("timestamp_opt", UpdateMemberListsRequestTimestampOpt.optional()),
    timestampSignup: core.serialization.property(
        "timestamp_signup",
        UpdateMemberListsRequestTimestampSignup.optional(),
    ),
    vip: core.serialization.boolean().optional(),
});

export declare namespace UpdateMemberListsRequest {
    export interface Raw {
        email_address?: string | null;
        email_type?: string | null;
        interests?: Record<string, boolean> | null;
        ip_opt?: string | null;
        ip_signup?: string | null;
        language?: string | null;
        location?: UpdateMemberListsRequestLocation.Raw | null;
        marketing_permissions?: UpdateMemberListsRequestMarketingPermissionsItem.Raw[] | null;
        merge_fields?: Record<string, UpdateMemberListsRequestMergeFieldsValue.Raw> | null;
        status?: UpdateMemberListsRequestStatus.Raw | null;
        timestamp_opt?: UpdateMemberListsRequestTimestampOpt.Raw | null;
        timestamp_signup?: UpdateMemberListsRequestTimestampSignup.Raw | null;
        vip?: boolean | null;
    }
}
