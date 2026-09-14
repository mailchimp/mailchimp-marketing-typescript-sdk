//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         template_id: "template_id"
 *     }
 */
export interface GetTemplatesRequest {
    /** The unique id for the template. */
    template_id: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    exclude_fields?: string | string[];
}
