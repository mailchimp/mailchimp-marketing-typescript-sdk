//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         sms_campaign_id: "sms_campaign_id",
 *         message_body: "message_body"
 *     }
 */
export interface UpsertContentSmsCampaignsRequest {
    /** The unique id for the SMS campaign. */
    sms_campaign_id: string;
    /** The SMS message body. */
    message_body: string;
    /** Attached images or files. Limited to one item. Omitting this field or sending an empty array removes any existing media; to keep the current media while updating other fields, re-send the media array. */
    media?: UpsertContentSmsCampaignsRequest.Media.Item[];
}

export namespace UpsertContentSmsCampaignsRequest {
    export type Media = Media.Item[];

    export namespace Media {
        export interface Item {
            /** The URL of the media file. */
            url?: string | undefined;
        }
    }
}
