//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListFacebookAdEcommerceProductActivityReportingResponseLinksItemMethod } from "./ListFacebookAdEcommerceProductActivityReportingResponseLinksItemMethod.js";

export const ListFacebookAdEcommerceProductActivityReportingResponseLinksItem: core.serialization.ObjectSchema<
    serializers.ListFacebookAdEcommerceProductActivityReportingResponseLinksItem.Raw,
    Mailchimp.ListFacebookAdEcommerceProductActivityReportingResponseLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: ListFacebookAdEcommerceProductActivityReportingResponseLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace ListFacebookAdEcommerceProductActivityReportingResponseLinksItem {
    export interface Raw {
        href?: string | null;
        method?: ListFacebookAdEcommerceProductActivityReportingResponseLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
