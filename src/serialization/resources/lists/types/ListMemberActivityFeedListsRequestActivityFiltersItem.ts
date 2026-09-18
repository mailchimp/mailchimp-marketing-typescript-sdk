//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListMemberActivityFeedListsRequestActivityFiltersItem: core.serialization.Schema<
    serializers.ListMemberActivityFeedListsRequestActivityFiltersItem.Raw,
    Mailchimp.ListMemberActivityFeedListsRequestActivityFiltersItem
> = core.serialization.enum_([
    "bounce",
    "click",
    "conversation",
    "ecommerce_signup",
    "event",
    "web_engagement",
    "generic_signup",
    "landing_page_signup",
    "marketing_permission",
    "note",
    "open",
    "order",
    "postcard_sent",
    "sent",
    "signup",
    "squatter_signup",
    "unsub",
    "website_signup",
    "survey_response",
    "sms_bulk_sent",
    "inbox_thread",
    "qbo_payment_link",
    "video_call_transcripts",
    "whatsapp_bulk_sent",
    "whatsapp_delivered",
]);

export declare namespace ListMemberActivityFeedListsRequestActivityFiltersItem {
    export type Raw =
        | "bounce"
        | "click"
        | "conversation"
        | "ecommerce_signup"
        | "event"
        | "web_engagement"
        | "generic_signup"
        | "landing_page_signup"
        | "marketing_permission"
        | "note"
        | "open"
        | "order"
        | "postcard_sent"
        | "sent"
        | "signup"
        | "squatter_signup"
        | "unsub"
        | "website_signup"
        | "survey_response"
        | "sms_bulk_sent"
        | "inbox_thread"
        | "qbo_payment_link"
        | "video_call_transcripts"
        | "whatsapp_bulk_sent"
        | "whatsapp_delivered";
}
