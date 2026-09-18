//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListVerifiedDomainsResponseDomainsItem } from "./ListVerifiedDomainsResponseDomainsItem.js";

export const ListVerifiedDomainsResponse: core.serialization.ObjectSchema<
    serializers.ListVerifiedDomainsResponse.Raw,
    Mailchimp.ListVerifiedDomainsResponse
> = core.serialization.object({
    domains: core.serialization.list(ListVerifiedDomainsResponseDomainsItem).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListVerifiedDomainsResponse {
    export interface Raw {
        domains?: ListVerifiedDomainsResponseDomainsItem.Raw[] | null;
        total_items?: number | null;
    }
}
