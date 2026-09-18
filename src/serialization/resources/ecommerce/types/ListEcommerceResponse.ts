//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListEcommerceResponseLinksItem } from "./ListEcommerceResponseLinksItem.js";

export const ListEcommerceResponse: core.serialization.ObjectSchema<
    serializers.ListEcommerceResponse.Raw,
    Mailchimp.ListEcommerceResponse
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ListEcommerceResponseLinksItem).optional()),
});

export declare namespace ListEcommerceResponse {
    export interface Raw {
        _links?: ListEcommerceResponseLinksItem.Raw[] | null;
    }
}
