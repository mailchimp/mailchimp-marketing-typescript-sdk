//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateStoreProductImageEcommerceResponseLinksItem } from "./CreateStoreProductImageEcommerceResponseLinksItem.js";

export const CreateStoreProductImageEcommerceResponse: core.serialization.ObjectSchema<
    serializers.CreateStoreProductImageEcommerceResponse.Raw,
    Mailchimp.CreateStoreProductImageEcommerceResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(CreateStoreProductImageEcommerceResponseLinksItem).optional(),
    ),
    id: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
    variantIds: core.serialization.property(
        "variant_ids",
        core.serialization.list(core.serialization.string()).optional(),
    ),
});

export declare namespace CreateStoreProductImageEcommerceResponse {
    export interface Raw {
        _links?: CreateStoreProductImageEcommerceResponseLinksItem.Raw[] | null;
        id?: string | null;
        url?: string | null;
        variant_ids?: string[] | null;
    }
}
