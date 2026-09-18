//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const FacebookAdsSite: core.serialization.ObjectSchema<
    serializers.FacebookAdsSite.Raw,
    Mailchimp.FacebookAdsSite
> = core.serialization.object({
    id: core.serialization.number().optional(),
    name: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
});

export declare namespace FacebookAdsSite {
    export interface Raw {
        id?: number | null;
        name?: string | null;
        url?: string | null;
    }
}
