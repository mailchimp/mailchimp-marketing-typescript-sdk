//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * This object represents a link from the resource where it is found to another resource or action that may be performed.
 */
export interface ListFeedbackCampaignsResponseLinksItem {
    /** This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action. */
    href?: string;
    /** The HTTP method that should be used when accessing the URL defined in 'href'. */
    method?: Mailchimp.ListFeedbackCampaignsResponseLinksItemMethod;
    /** As with an HTML 'rel' attribute, this describes the type of link. */
    rel?: string;
    /** For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to. */
    schema?: string;
    /** For GETs, this is a URL representing the schema that the response should conform to. */
    targetSchema?: string;
}
