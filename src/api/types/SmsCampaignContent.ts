//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * The content of an SMS campaign.
 */
export interface SmsCampaignContent {
    /** The SMS message body. */
    messageBody?: string;
    /** The estimated number of message segments this content will use. */
    estimatedSegments?: number;
    /** The merge fields used in the message body. */
    mergeFields?: string[];
    /** Attached images or files. */
    media?: Mailchimp.SmsCampaignContentMediaItem[];
    /** The source that created or imported this content. */
    source?: Mailchimp.SmsCampaignContentSource;
    /** Additional content properties. */
    properties?: Mailchimp.SmsCampaignContentProperties;
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.SmsCampaignContentLinksItem[];
}
