//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         fileId: "file_id"
 *     }
 */
export interface UpdateFileFileManagerRequest {
    /** The unique id for the File Manager file. */
    fileId: string;
    /** The id of the folder. Setting `folder_id` to `0` will remove a file from its current folder. */
    folderId?: number;
    /** The name of the file. */
    name?: string;
}
