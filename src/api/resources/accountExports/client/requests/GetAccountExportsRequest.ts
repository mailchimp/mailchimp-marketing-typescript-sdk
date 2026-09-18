//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         exportId: "export_id"
 *     }
 */
export interface GetAccountExportsRequest {
    /** The unique id for the account export. */
    exportId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}
