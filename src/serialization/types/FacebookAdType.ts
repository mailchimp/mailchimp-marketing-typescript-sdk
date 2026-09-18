//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const FacebookAdType: core.serialization.Schema<serializers.FacebookAdType.Raw, Mailchimp.FacebookAdType> =
    core.serialization.enum_([
        "regular",
        "email-touchpoint",
        "plaintext",
        "rss",
        "reconfirm",
        "variate",
        "absplit",
        "automation",
        "facebook",
        "google",
        "autoresponder",
        "transactional",
        "page",
        "website",
        "social_post",
        "survey",
        "customer_journey",
        "sms",
    ]);

export declare namespace FacebookAdType {
    export type Raw =
        | "regular"
        | "email-touchpoint"
        | "plaintext"
        | "rss"
        | "reconfirm"
        | "variate"
        | "absplit"
        | "automation"
        | "facebook"
        | "google"
        | "autoresponder"
        | "transactional"
        | "page"
        | "website"
        | "social_post"
        | "survey"
        | "customer_journey"
        | "sms";
}
