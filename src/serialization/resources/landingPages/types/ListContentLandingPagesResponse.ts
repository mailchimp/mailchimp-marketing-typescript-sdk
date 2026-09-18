//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListContentLandingPagesResponseLinksItem } from "./ListContentLandingPagesResponseLinksItem.js";

export const ListContentLandingPagesResponse: core.serialization.ObjectSchema<
    serializers.ListContentLandingPagesResponse.Raw,
    Mailchimp.ListContentLandingPagesResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListContentLandingPagesResponseLinksItem).optional(),
    ),
    html: core.serialization.string().optional(),
    json: core.serialization.string().optional(),
});

export declare namespace ListContentLandingPagesResponse {
    export interface Raw {
        _links?: ListContentLandingPagesResponseLinksItem.Raw[] | null;
        html?: string | null;
        json?: string | null;
    }
}
