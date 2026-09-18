//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         pageId: "page_id"
 *     }
 */
export interface ListContentLandingPagesRequest {
    /** The unique id for the page. */
    pageId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}
