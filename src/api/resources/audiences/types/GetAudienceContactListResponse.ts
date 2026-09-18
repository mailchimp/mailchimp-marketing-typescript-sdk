//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * An array of objects, each representing a contact record.
 */
export interface GetAudienceContactListResponse {
    /** An array of objects, each representing a contact record. */
    contacts?: Mailchimp.AudiencesContact[];
    /** A cursor pointing to the last item on this page of the collection. Paginate through a collection of records by setting the `cursor` parameter on a subsequent request to this value. */
    nextCursor?: string;
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.GetAudienceContactListResponseLinksItem[];
}
