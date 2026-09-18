//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         templateId: "template_id"
 *     }
 */
export interface UpdateTemplatesRequest {
    /** The unique id for the template. */
    templateId: string;
    /** The id of the folder the template is currently in. */
    folderId?: string;
    /** The raw HTML for the template. We  support the Mailchimp [Template Language](https://mailchimp.com/help/getting-started-with-mailchimps-template-language/) in any HTML code passed via the API. */
    html?: string;
    /** The name of the template. */
    name?: string;
}
