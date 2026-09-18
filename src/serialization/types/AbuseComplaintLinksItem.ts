//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { AbuseComplaintLinksItemMethod } from "./AbuseComplaintLinksItemMethod.js";

export const AbuseComplaintLinksItem: core.serialization.ObjectSchema<
    serializers.AbuseComplaintLinksItem.Raw,
    Mailchimp.AbuseComplaintLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: AbuseComplaintLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace AbuseComplaintLinksItem {
    export interface Raw {
        href?: string | null;
        method?: AbuseComplaintLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
