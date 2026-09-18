//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Audience settings
 */
export interface FacebookAdsAudience {
    emailSource?: Mailchimp.FacebookAdsAudienceEmailSource;
    /** To include list contacts as part of audience */
    includeSourceInTarget?: boolean;
    /** To find similar audience in given country */
    lookalikeCountryCode?: string;
    /** List or Facebook based audience */
    sourceType?: Mailchimp.FacebookAdsAudienceSourceType;
    targetingSpecs?: Mailchimp.FacebookAdsAudienceTargetingSpecs;
    /** Type of the audience */
    type?: Mailchimp.FacebookAdsAudienceType;
}
