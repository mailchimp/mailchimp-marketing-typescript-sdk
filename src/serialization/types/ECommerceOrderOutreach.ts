//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const ECommerceOrderOutreach: core.serialization.ObjectSchema<
    serializers.ECommerceOrderOutreach.Raw,
    Mailchimp.ECommerceOrderOutreach
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    publishedTime: core.serialization.property("published_time", core.serialization.date().optional()),
    type: core.serialization.string().optional(),
});

export declare namespace ECommerceOrderOutreach {
    export interface Raw {
        id?: string | null;
        name?: string | null;
        published_time?: string | null;
        type?: string | null;
    }
}
