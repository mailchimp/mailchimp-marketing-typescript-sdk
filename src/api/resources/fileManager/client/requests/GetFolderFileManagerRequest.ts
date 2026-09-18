//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         folderId: "folder_id"
 *     }
 */
export interface GetFolderFileManagerRequest {
    /** The unique id for the File Manager folder. */
    folderId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}
