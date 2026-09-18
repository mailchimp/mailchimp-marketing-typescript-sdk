//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListDefaultContentTemplatesResponseLinksItem } from "./ListDefaultContentTemplatesResponseLinksItem.js";

export const ListDefaultContentTemplatesResponse: core.serialization.ObjectSchema<
    serializers.ListDefaultContentTemplatesResponse.Raw,
    Mailchimp.ListDefaultContentTemplatesResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListDefaultContentTemplatesResponseLinksItem).optional(),
    ),
    sections: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace ListDefaultContentTemplatesResponse {
    export interface Raw {
        _links?: ListDefaultContentTemplatesResponseLinksItem.Raw[] | null;
        sections?: Record<string, unknown> | null;
    }
}
