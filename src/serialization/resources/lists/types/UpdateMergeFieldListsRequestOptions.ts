//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const UpdateMergeFieldListsRequestOptions: core.serialization.ObjectSchema<
    serializers.UpdateMergeFieldListsRequestOptions.Raw,
    Mailchimp.UpdateMergeFieldListsRequestOptions
> = core.serialization.object({
    choices: core.serialization.list(core.serialization.string()).optional(),
    dateFormat: core.serialization.property("date_format", core.serialization.string().optional()),
    defaultCountry: core.serialization.property("default_country", core.serialization.number().optional()),
    phoneFormat: core.serialization.property("phone_format", core.serialization.string().optional()),
});

export declare namespace UpdateMergeFieldListsRequestOptions {
    export interface Raw {
        choices?: string[] | null;
        date_format?: string | null;
        default_country?: number | null;
        phone_format?: string | null;
    }
}
