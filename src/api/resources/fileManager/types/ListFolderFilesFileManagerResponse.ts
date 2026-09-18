//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A list of available images and files stored in the File Manager for the account.
 */
export interface ListFolderFilesFileManagerResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListFolderFilesFileManagerResponseLinksItem[];
    /**  A list of files and images in an account. */
    files?: Mailchimp.GalleryFile[];
    /** The total size of all File Manager files in bytes. */
    totalFileSize?: number;
    /** The total number of items matching the query regardless of pagination. */
    totalItems?: number;
}
