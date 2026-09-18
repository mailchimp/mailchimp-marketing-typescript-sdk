//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../../api/index.js";
import * as core from "../../../../../core/index.js";
import type * as serializers from "../../../../index.js";
import { CreateAccountExportsRequestIncludeStagesItem } from "../../types/CreateAccountExportsRequestIncludeStagesItem.js";

export const CreateAccountExportsRequest: core.serialization.Schema<
    serializers.CreateAccountExportsRequest.Raw,
    Mailchimp.CreateAccountExportsRequest
> = core.serialization.object({
    includeStages: core.serialization.property(
        "include_stages",
        core.serialization.list(CreateAccountExportsRequestIncludeStagesItem),
    ),
    sinceTimestamp: core.serialization.property("since_timestamp", core.serialization.date().optional()),
});

export declare namespace CreateAccountExportsRequest {
    export interface Raw {
        include_stages: CreateAccountExportsRequestIncludeStagesItem.Raw[];
        since_timestamp?: string | null;
    }
}
