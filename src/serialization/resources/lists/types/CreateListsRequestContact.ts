//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateListsRequestContact: core.serialization.ObjectSchema<
    serializers.CreateListsRequestContact.Raw,
    Mailchimp.CreateListsRequestContact
> = core.serialization.object({
    address1: core.serialization.string(),
    address2: core.serialization.string().optional(),
    city: core.serialization.string(),
    company: core.serialization.string(),
    country: core.serialization.string(),
    phone: core.serialization.string().optional(),
    state: core.serialization.string().optional(),
    zip: core.serialization.string().optional(),
});

export declare namespace CreateListsRequestContact {
    export interface Raw {
        address1: string;
        address2?: string | null;
        city: string;
        company: string;
        country: string;
        phone?: string | null;
        state?: string | null;
        zip?: string | null;
    }
}
