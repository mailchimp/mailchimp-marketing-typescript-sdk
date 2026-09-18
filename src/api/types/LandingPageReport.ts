//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A summary of an individual landing page's settings and content.
 */
export interface LandingPageReport {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.LandingPageReportLinksItem[];
    /** The number of clicks to this landing pages. */
    clicks?: number;
    /** The percentage of people who visited your landing page and were added to your list. */
    conversionRate?: number;
    ecommerce?: Mailchimp.LandingPageReportEcommerce;
    /** A string that uniquely identifies this landing page. */
    id?: string;
    /** The list id connected to this landing page. */
    listId?: string;
    /** List Name */
    listName?: string;
    /** The name of this landing page the user will see. */
    name?: string;
    /** The time this landing page was published. */
    publishedAt?: Date;
    /** A list of tags associated to the landing page. */
    signupTags?: Mailchimp.LandingPageReportSignupTagsItem[];
    /** The status of the landing page. */
    status?: string;
    /** The number of subscribes to this landing pages. */
    subscribes?: number;
    timeseries?: Mailchimp.LandingPageReportTimeseries;
    /** The name of the landing page the user's customers will see. */
    title?: string;
    /** The number of unique visits to this landing pages. */
    uniqueVisits?: number;
    /** The time this landing page was unpublished. */
    unpublishedAt?: Date;
    /** The landing page url. */
    url?: string;
    /** The number of visits to this landing pages. */
    visits?: number;
    /** The ID used in the Mailchimp web application. */
    webId?: number;
}
