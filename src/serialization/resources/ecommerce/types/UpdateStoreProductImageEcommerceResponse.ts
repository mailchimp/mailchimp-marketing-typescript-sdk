//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { UpdateStoreProductImageEcommerceResponseLinksItem } from "./UpdateStoreProductImageEcommerceResponseLinksItem.js";

export const UpdateStoreProductImageEcommerceResponse: core.serialization.ObjectSchema<
    serializers.UpdateStoreProductImageEcommerceResponse.Raw,
    Mailchimp.UpdateStoreProductImageEcommerceResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(UpdateStoreProductImageEcommerceResponseLinksItem).optional(),
    ),
    id: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
    variantIds: core.serialization.property(
        "variant_ids",
        core.serialization.list(core.serialization.string()).optional(),
    ),
});

export declare namespace UpdateStoreProductImageEcommerceResponse {
    export interface Raw {
        _links?: UpdateStoreProductImageEcommerceResponseLinksItem.Raw[] | null;
        id?: string | null;
        url?: string | null;
        variant_ids?: string[] | null;
    }
}
