//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         audienceId: "audience_id",
 *         contactId: "contact_id"
 *     }
 */
export interface GetAudienceContactRequest {
    /** The unique ID for the audience. */
    audienceId: string;
    /** A unique identifier for the contact, which can be a Mailchimp contact ID or a channel hash. A channel hash must follow the format email:[md5_hash] (where the hash is the MD5 of the lowercased email address) or sms:[sha256_hash] (where the hash is the SHA256 of the E.164-formatted phone number). */
    contactId: string;
    /** A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation. */
    fields?: string | string[];
    /** A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation. */
    excludeFields?: string | string[];
}
