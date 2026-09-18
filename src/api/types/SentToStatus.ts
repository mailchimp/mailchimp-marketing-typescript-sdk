//  This file was auto-generated from our API Definition.

/** The status of the email delivered to this subscriber. `hard` and `soft` refer to different [bounce types](https://mailchimp.com/help/soft-vs-hard-bounces/). */
export const SentToStatus = {
    Sent: "sent",
    Hard: "hard",
    Soft: "soft",
} as const;
export type SentToStatus = (typeof SentToStatus)[keyof typeof SentToStatus];
