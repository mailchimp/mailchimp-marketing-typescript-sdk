//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { GalleryFileLinksItem } from "./GalleryFileLinksItem.js";
import { GalleryFileType } from "./GalleryFileType.js";

export const GalleryFile: core.serialization.ObjectSchema<serializers.GalleryFile.Raw, Mailchimp.GalleryFile> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(GalleryFileLinksItem).optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
        folderId: core.serialization.property("folder_id", core.serialization.number().optional()),
        fullSizeUrl: core.serialization.property("full_size_url", core.serialization.string().optional()),
        height: core.serialization.number().optional(),
        id: core.serialization.number().optional(),
        name: core.serialization.string().optional(),
        size: core.serialization.number().optional(),
        thumbnailUrl: core.serialization.property("thumbnail_url", core.serialization.string().optional()),
        type: GalleryFileType.optional(),
        width: core.serialization.number().optional(),
    });

export declare namespace GalleryFile {
    export interface Raw {
        _links?: GalleryFileLinksItem.Raw[] | null;
        created_at?: string | null;
        created_by?: string | null;
        folder_id?: number | null;
        full_size_url?: string | null;
        height?: number | null;
        id?: number | null;
        name?: string | null;
        size?: number | null;
        thumbnail_url?: string | null;
        type?: GalleryFileType.Raw | null;
        width?: number | null;
    }
}
