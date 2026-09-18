//  This file was auto-generated from our API Definition.

/** The type of outreach this object is. */
export const FacebookAdType = {
    Regular: "regular",
    EmailTouchpoint: "email-touchpoint",
    Plaintext: "plaintext",
    Rss: "rss",
    Reconfirm: "reconfirm",
    Variate: "variate",
    Absplit: "absplit",
    Automation: "automation",
    Facebook: "facebook",
    Google: "google",
    Autoresponder: "autoresponder",
    Transactional: "transactional",
    Page: "page",
    Website: "website",
    SocialPost: "social_post",
    Survey: "survey",
    CustomerJourney: "customer_journey",
    Sms: "sms",
} as const;
export type FacebookAdType = (typeof FacebookAdType)[keyof typeof FacebookAdType];
