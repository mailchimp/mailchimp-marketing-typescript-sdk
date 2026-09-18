//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { TemplateInstance } from "../../../types/TemplateInstance.js";
import { ListTemplatesResponseLinksItem } from "./ListTemplatesResponseLinksItem.js";

export const ListTemplatesResponse: core.serialization.ObjectSchema<
    serializers.ListTemplatesResponse.Raw,
    Mailchimp.ListTemplatesResponse
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(ListTemplatesResponseLinksItem).optional()),
    templates: core.serialization.list(TemplateInstance).optional(),
    totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
});

export declare namespace ListTemplatesResponse {
    export interface Raw {
        _links?: ListTemplatesResponseLinksItem.Raw[] | null;
        templates?: TemplateInstance.Raw[] | null;
        total_items?: number | null;
    }
}
