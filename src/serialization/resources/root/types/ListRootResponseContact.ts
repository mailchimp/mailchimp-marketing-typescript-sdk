//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListRootResponseContact: core.serialization.ObjectSchema<
    serializers.ListRootResponseContact.Raw,
    Mailchimp.ListRootResponseContact
> = core.serialization.object({
    addr1: core.serialization.string().optional(),
    addr2: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    company: core.serialization.string().optional(),
    country: core.serialization.string().optional(),
    state: core.serialization.string().optional(),
    zip: core.serialization.string().optional(),
});

export declare namespace ListRootResponseContact {
    export interface Raw {
        addr1?: string | null;
        addr2?: string | null;
        city?: string | null;
        company?: string | null;
        country?: string | null;
        state?: string | null;
        zip?: string | null;
    }
}
