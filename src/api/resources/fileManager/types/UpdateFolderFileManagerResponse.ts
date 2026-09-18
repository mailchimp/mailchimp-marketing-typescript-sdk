//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * An individual folder listed in the File Manager.
 */
export interface UpdateFolderFileManagerResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.UpdateFolderFileManagerResponseLinksItem[];
    /** The date and time a file was added to the File Manager in ISO 8601 format. */
    createdAt?: Date;
    /** The username of the profile that created the folder. */
    createdBy?: string;
    /** The number of files in the folder. */
    fileCount?: number;
    /** The unique id for the folder. */
    id?: number;
    /** The name of the folder. */
    name?: string;
}
