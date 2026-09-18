//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A survey section. On PATCH, include the section id to update it; omit the section from the sections array to delete it (and any question it contains).
 */
export interface SurveySectionRequest {
    /** The section ID. On PATCH, include to update an existing section; omit to add a new section. */
    id?: string;
    /** The section type. */
    type: Mailchimp.SurveySectionRequestType;
    /** Rich text content for introduction or context sections. */
    text?: string;
    /** Additional section options. */
    options?: Record<string, unknown>;
    /** A survey question. On PATCH, include the question id to update it. Omitting question id creates a new question; it does not delete an existing one. To delete a question, omit its section from the sections array. */
    question?: Mailchimp.SurveySectionRequestQuestion;
}
