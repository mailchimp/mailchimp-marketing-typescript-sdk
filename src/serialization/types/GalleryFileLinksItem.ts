//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { GalleryFileLinksItemMethod } from "./GalleryFileLinksItemMethod.js";

export const GalleryFileLinksItem: core.serialization.ObjectSchema<
    serializers.GalleryFileLinksItem.Raw,
    Mailchimp.GalleryFileLinksItem
> = core.serialization.object({
    href: core.serialization.string().optional(),
    method: GalleryFileLinksItemMethod.optional(),
    rel: core.serialization.string().optional(),
    schema: core.serialization.string().optional(),
    targetSchema: core.serialization.string().optional(),
});

export declare namespace GalleryFileLinksItem {
    export interface Raw {
        href?: string | null;
        method?: GalleryFileLinksItemMethod.Raw | null;
        rel?: string | null;
        schema?: string | null;
        targetSchema?: string | null;
    }
}
