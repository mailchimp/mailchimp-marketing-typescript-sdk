//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
 */
export interface ListsPost {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListsPostLinksItem[];
    /** A unique ID for the contact record. */
    contactId?: string;
    /** Email address for a subscriber. */
    emailAddress?: string;
    /** The list member's email client. */
    emailClient?: string;
    /** Type of email this member asked to get ('html' or 'text'). */
    emailType?: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    id?: string;
    /** The key of this object's properties is the ID of the interest in question. */
    interests?: Record<string, boolean>;
    /** The IP address the subscriber used to confirm their opt-in status. */
    ipOpt?: string;
    /** IP address the subscriber signed up from. */
    ipSignup?: string;
    /** If set/detected, the [subscriber's language](https://mailchimp.com/help/view-and-edit-contact-languages/). */
    language?: string;
    /** The date and time the member's info was last changed in ISO 8601 format. */
    lastChanged?: Date;
    /** The most recent Note added about this member. */
    lastNote?: Mailchimp.ListsPostLastNote;
    /** The list id. */
    listId?: string;
    /** Subscriber location information. */
    location?: Mailchimp.ListsPostLocation;
    /** Star rating for this member, between 1 and 5. */
    memberRating?: number;
    /** An individual merge var and value for a member. */
    mergeFields?: Record<string, unknown>;
    /** Open and click rates for this subscriber. */
    stats?: Mailchimp.ListsPostStats;
    /** Subscriber's current status. */
    status?: Mailchimp.ListsPostStatus;
    /** The tags applied to this member. */
    tags?: Mailchimp.ListsPostTagsItem[];
    /** The number of tags applied to this member. */
    tagsCount?: number;
    /** The date and time the subscriber confirmed their opt-in status in ISO 8601 format. */
    timestampOpt?: Date;
    /** The date and time the subscriber signed up for the list in ISO 8601 format. */
    timestampSignup?: Date;
    /** An identifier for the address across all of Mailchimp. */
    uniqueEmailId?: string;
    /** [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber. */
    vip?: boolean;
}
