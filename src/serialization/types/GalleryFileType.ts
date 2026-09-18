//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const GalleryFileType: core.serialization.Schema<serializers.GalleryFileType.Raw, Mailchimp.GalleryFileType> =
    core.serialization.enum_(["image", "file"]);

export declare namespace GalleryFileType {
    export type Raw = "image" | "file";
}
