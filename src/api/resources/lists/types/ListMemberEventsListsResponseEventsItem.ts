//  This file was auto-generated from our API Definition.

/**
 * A specific event for a contact.
 */
export interface ListMemberEventsListsResponseEventsItem {
    /** The name for this type of event ('purchased', 'visited', etc). Must be 2-30 characters in length */
    name?: string;
    /** The date and time the event occurred in ISO 8601 format. */
    occurredAt?: Date;
    /** An optional list of properties */
    properties?: Record<string, string>;
}
