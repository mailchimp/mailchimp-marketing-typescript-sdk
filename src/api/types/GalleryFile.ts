//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * An individual file listed in the File Manager.
 */
export interface GalleryFile {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.GalleryFileLinksItem[];
    /** The date and time a file was added to the File Manager in ISO 8601 format. */
    createdAt?: Date;
    /** The username of the profile that uploaded the file. */
    createdBy?: string;
    /** The id of the folder. */
    folderId?: number;
    /** The url of the full-size file. */
    fullSizeUrl?: string;
    /** The height of an image. */
    height?: number;
    /** The unique id of the file. */
    id?: number;
    /** The name of the file. */
    name?: string;
    /** The size of the file in bytes. */
    size?: number;
    /** The url of the thumbnail preview. */
    thumbnailUrl?: string;
    /** The type of file in the File Manager. */
    type?: Mailchimp.GalleryFileType;
    /** The width of the image. */
    width?: number;
}
