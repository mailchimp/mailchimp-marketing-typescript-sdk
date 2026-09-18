//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GetStoreProductImageEcommerceResponseLinksItem } from "./GetStoreProductImageEcommerceResponseLinksItem.js";

export const GetStoreProductImageEcommerceResponse: core.serialization.ObjectSchema<
    serializers.GetStoreProductImageEcommerceResponse.Raw,
    Mailchimp.GetStoreProductImageEcommerceResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(GetStoreProductImageEcommerceResponseLinksItem).optional(),
    ),
    id: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
    variantIds: core.serialization.property(
        "variant_ids",
        core.serialization.list(core.serialization.string()).optional(),
    ),
});

export declare namespace GetStoreProductImageEcommerceResponse {
    export interface Raw {
        _links?: GetStoreProductImageEcommerceResponseLinksItem.Raw[] | null;
        id?: string | null;
        url?: string | null;
        variant_ids?: string[] | null;
    }
}
