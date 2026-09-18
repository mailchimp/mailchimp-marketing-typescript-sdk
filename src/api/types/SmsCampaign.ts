//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * A single SMS campaign.
 */
export interface SmsCampaign {
    /** A string that uniquely identifies this campaign. */
    id?: string;
    /** The ID used in the Mailchimp web application. */
    webId?: string;
    /** The name of the campaign. */
    name?: string;
    /** The current status of the campaign. */
    status?: string;
    /** The channel for this campaign (sms or whatsapp). */
    channel?: string;
    /** The numeric ID of the list associated with this campaign. */
    listId?: number;
    /** The number of recipients for this campaign. */
    recipientCount?: number;
    /** The date and time the campaign was created. */
    createTime?: Date;
    /** The date and time the campaign is scheduled to send. */
    sendTime?: Date;
    /** The date and time the campaign was last updated. */
    updatedAt?: Date;
    /** The date and time the campaign will stop sending in ISO 8601 format. */
    expireTime?: Date;
    /** Whether the campaign is configured to send immediately. */
    isSendNow?: boolean;
    /** The ID of the folder this campaign is in. */
    folderId?: string;
    /** The segment IDs used to target recipients for this campaign. */
    segments?: number[];
    /** The segment IDs excluded from receiving this campaign. */
    excludedSegments?: number[];
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.SmsCampaignLinksItem[];
}
