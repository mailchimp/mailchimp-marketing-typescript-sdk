//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         appId: "app_id"
 *     }
 */
export interface GetAuthorizedAppsRequest {
    /** The unique id for the connected authorized application. */
    appId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}
