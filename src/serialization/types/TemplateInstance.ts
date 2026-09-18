//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { TemplateInstanceContentType } from "./TemplateInstanceContentType.js";
import { TemplateInstanceLinksItem } from "./TemplateInstanceLinksItem.js";

export const TemplateInstance: core.serialization.ObjectSchema<
    serializers.TemplateInstance.Raw,
    Mailchimp.TemplateInstance
> = core.serialization.object({
    links: core.serialization.property("_links", core.serialization.list(TemplateInstanceLinksItem).optional()),
    active: core.serialization.boolean().optional(),
    category: core.serialization.string().optional(),
    contentType: core.serialization.property("content_type", TemplateInstanceContentType.optional()),
    createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
    dateCreated: core.serialization.property("date_created", core.serialization.date().optional()),
    dateEdited: core.serialization.property("date_edited", core.serialization.date().optional()),
    dragAndDrop: core.serialization.property("drag_and_drop", core.serialization.boolean().optional()),
    editedBy: core.serialization.property("edited_by", core.serialization.string().optional()),
    folderId: core.serialization.property("folder_id", core.serialization.string().optional()),
    id: core.serialization.number().optional(),
    name: core.serialization.string().optional(),
    responsive: core.serialization.boolean().optional(),
    shareUrl: core.serialization.property("share_url", core.serialization.string().optional()),
    thumbnail: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
});

export declare namespace TemplateInstance {
    export interface Raw {
        _links?: TemplateInstanceLinksItem.Raw[] | null;
        active?: boolean | null;
        category?: string | null;
        content_type?: TemplateInstanceContentType.Raw | null;
        created_by?: string | null;
        date_created?: string | null;
        date_edited?: string | null;
        drag_and_drop?: boolean | null;
        edited_by?: string | null;
        folder_id?: string | null;
        id?: number | null;
        name?: string | null;
        responsive?: boolean | null;
        share_url?: string | null;
        thumbnail?: string | null;
        type?: string | null;
    }
}
