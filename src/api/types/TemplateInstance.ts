//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Information about a specific template.
 */
export interface TemplateInstance {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.TemplateInstanceLinksItem[];
    /** User templates are not 'deleted,' but rather marked as 'inactive.' Returns whether the template is still active. */
    active?: boolean;
    /** If available, the category the template is listed in. */
    category?: string;
    /** How the template's content is put together. */
    contentType?: Mailchimp.TemplateInstanceContentType;
    /** The login name for template's creator. */
    createdBy?: string;
    /** The date and time the template was created in ISO 8601 format. */
    dateCreated?: Date;
    /** The date and time the template was edited in ISO 8601 format. */
    dateEdited?: Date;
    /** Whether the template uses the drag and drop editor. */
    dragAndDrop?: boolean;
    /** The login name who last edited the template. */
    editedBy?: string;
    /** The id of the folder the template is currently in. */
    folderId?: string;
    /** The individual id for the template. */
    id?: number;
    /** The name of the template. */
    name?: string;
    /** Whether the template contains media queries to make it responsive. */
    responsive?: boolean;
    /** The URL used for [template sharing](https://mailchimp.com/help/share-a-template/). */
    shareUrl?: string;
    /** If available, the URL for a thumbnail of the template. */
    thumbnail?: string;
    /** The type of template (user, base, or gallery). */
    type?: string;
}
