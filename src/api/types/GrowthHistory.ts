//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A summary of a specific list's growth activity for a specific month and year.
 */
export interface GrowthHistory {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.GrowthHistoryLinksItem[];
    /** Newly cleaned (hard-bounced) members on the list for a specific month. */
    cleaned?: number;
    /** Newly deleted members on the list for a specific month. */
    deleted?: number;
    /** (deprecated) */
    existing?: number;
    /** (deprecated) */
    imports?: number;
    /** The list id for the growth activity report. */
    listId?: string;
    /** The month that the growth history is describing. */
    month?: string;
    /** (deprecated) */
    optins?: number;
    /** Pending members on the list for a specific month. */
    pending?: number;
    /** Newly reconfirmed members on the list for a specific month. */
    reconfirm?: number;
    /** Total subscribed members on the list at the end of the month. */
    subscribed?: number;
    /** Subscribers that have been sent transactional emails via Mandrill. */
    transactional?: number;
    /** Newly unsubscribed members on the list for a specific month. */
    unsubscribed?: number;
}
