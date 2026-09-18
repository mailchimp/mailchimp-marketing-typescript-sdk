//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
 */
export interface ListMembers {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.ListMembersLinksItem[];
    /** Indicates whether a contact consents to 1:1 messaging. */
    consentsToOneToOneMessaging?: boolean;
    /** As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address. */
    contactId?: string;
    /** Email address for a subscriber. */
    emailAddress?: string;
    /** The list member's email client. */
    emailClient?: string;
    /** Type of email this member asked to get ('html' or 'text'). */
    emailType?: unknown;
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
    lastNote?: Mailchimp.ListMembersLastNote;
    /** The list id. */
    listId?: string;
    /** Subscriber location information. */
    location?: Mailchimp.ListMembersLocation;
    /** The marketing permissions for the subscriber. */
    marketingPermissions?: Mailchimp.ListMembersMarketingPermissionsItem[];
    /** Star rating for this member, between 1 and 5. */
    memberRating?: number;
    /** A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure. */
    mergeFields?: Record<string, Mailchimp.ListMembersMergeFieldsValue>;
    /** A US phone number for SMS contact. */
    smsPhoneNumber?: string;
    /** The datetime when the SMS subscription was last updated */
    smsSubscriptionLastUpdated?: string;
    /** The status of an SMS subscription. */
    smsSubscriptionStatus?: Mailchimp.ListMembersSmsSubscriptionStatus;
    /** The source from which the subscriber was added to this list. */
    source?: string;
    /** Open and click rates for this subscriber. */
    stats?: Mailchimp.ListMembersStats;
    /** Subscriber's current status. */
    status?: Mailchimp.ListMembersStatus;
    /** Returns up to 50 tags applied to this member. To retrieve all tags see [Member Tags](https://mailchimp.com/developer/marketing/api/list-member-tags/). */
    tags?: Mailchimp.ListMembersTagsItem[];
    /** The number of tags applied to this member. */
    tagsCount?: number;
    /** The date and time the subscriber confirmed their opt-in status in ISO 8601 format. */
    timestampOpt?: Date;
    /** The date and time the subscriber signed up for the list in ISO 8601 format. */
    timestampSignup?: Date;
    /** An identifier for the address across all of Mailchimp. */
    uniqueEmailId?: string;
    /** A subscriber's reason for unsubscribing. */
    unsubscribeReason?: string;
    /** [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber. */
    vip?: boolean;
    /** The ID used in the Mailchimp web application. View this member in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/view?id={web_id}`. */
    webId?: number;
}
