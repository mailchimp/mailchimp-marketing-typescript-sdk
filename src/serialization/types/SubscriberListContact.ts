//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SubscriberListContact: core.serialization.ObjectSchema<
    serializers.SubscriberListContact.Raw,
    Mailchimp.SubscriberListContact
> = core.serialization.object({
    address1: core.serialization.string().optional(),
    address2: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    company: core.serialization.string().optional(),
    country: core.serialization.string().optional(),
    phone: core.serialization.string().optional(),
    state: core.serialization.string().optional(),
    zip: core.serialization.string().optional(),
});

export declare namespace SubscriberListContact {
    export interface Raw {
        address1?: string | null;
        address2?: string | null;
        city?: string | null;
        company?: string | null;
        country?: string | null;
        phone?: string | null;
        state?: string | null;
        zip?: string | null;
    }
}
