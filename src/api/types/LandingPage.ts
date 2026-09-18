//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A summary of an individual landing page's settings and content.
 */
export interface LandingPage {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.LandingPageLinksItem[];
    /** The time this landing page was created. */
    createdAt?: Date;
    /** Created by mobile or web */
    createdBySource?: string;
    /** The description of this landing page. */
    description?: string;
    /** A string that uniquely identifies this landing page. */
    id?: string;
    /** The list's ID associated with this landing page. */
    listId?: string;
    /** The name of this landing page. */
    name?: string;
    /** The time this landing page was published. */
    publishedAt?: Date;
    /** The status of this landing page. */
    status?: Mailchimp.LandingPageStatus;
    /** The ID of the store associated with this landing page. */
    storeId?: string;
    /** The template_id of this landing page. */
    templateId?: number;
    /** The title of this landing page seen in the browser's title bar. */
    title?: string;
    /** The tracking settings applied to this landing page. */
    tracking?: Mailchimp.LandingPageTracking;
    /** The time this landing page was unpublished. */
    unpublishedAt?: Date;
    /** The time this landing page was updated at. */
    updatedAt?: Date;
    /** The url of the published landing page. */
    url?: string;
    /** The ID used in the Mailchimp web application. */
    webId?: number;
}
