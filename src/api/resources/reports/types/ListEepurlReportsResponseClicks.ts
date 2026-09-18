//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * A summary of the click-throughs on the campaign's URL.
 */
export interface ListEepurlReportsResponseClicks {
    /** The total number of clicks to the campaign's URL. */
    clicks?: number;
    /** The timestamp for the first click to the URL. */
    firstClick?: Date;
    /** The timestamp for the last click to the URL. */
    lastClick?: Date;
    /** A summary of the top click locations. */
    locations?: Mailchimp.ListEepurlReportsResponseClicksLocationsItem[];
}
