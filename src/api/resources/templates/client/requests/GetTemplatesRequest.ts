//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         templateId: "template_id"
 *     }
 */
export interface GetTemplatesRequest {
    /** The unique id for the template. */
    templateId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}
