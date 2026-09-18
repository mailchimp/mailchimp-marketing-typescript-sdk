//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateMergeFieldListsRequestOptions: core.serialization.ObjectSchema<
    serializers.CreateMergeFieldListsRequestOptions.Raw,
    Mailchimp.CreateMergeFieldListsRequestOptions
> = core.serialization.object({
    choices: core.serialization.list(core.serialization.string()).optional(),
    dateFormat: core.serialization.property("date_format", core.serialization.string().optional()),
    defaultCountry: core.serialization.property("default_country", core.serialization.number().optional()),
    phoneFormat: core.serialization.property("phone_format", core.serialization.string().optional()),
    size: core.serialization.number().optional(),
});

export declare namespace CreateMergeFieldListsRequestOptions {
    export interface Raw {
        choices?: string[] | null;
        date_format?: string | null;
        default_country?: number | null;
        phone_format?: string | null;
        size?: number | null;
    }
}
