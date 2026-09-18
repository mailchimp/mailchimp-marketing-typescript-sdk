//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AudiencesContactMergeFieldsValueAddr1: core.serialization.ObjectSchema<
    serializers.AudiencesContactMergeFieldsValueAddr1.Raw,
    Mailchimp.AudiencesContactMergeFieldsValueAddr1
> = core.serialization.object({
    addr1: core.serialization.string(),
    addr2: core.serialization.string().optional(),
    city: core.serialization.string(),
    state: core.serialization.string(),
    zip: core.serialization.string(),
    country: core.serialization.string().optional(),
});

export declare namespace AudiencesContactMergeFieldsValueAddr1 {
    export interface Raw {
        addr1: string;
        addr2?: string | null;
        city: string;
        state: string;
        zip: string;
        country?: string | null;
    }
}
