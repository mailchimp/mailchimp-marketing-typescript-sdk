//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         fileId: "file_id"
 *     }
 */
export interface GetFileFileManagerRequest {
    /** The unique id for the File Manager file. */
    fileId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}
