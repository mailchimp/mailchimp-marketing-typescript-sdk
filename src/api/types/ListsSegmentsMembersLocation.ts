//  This file was auto-generated from our API Definition.

/**
 * Subscriber location information.
 */
export interface ListsSegmentsMembersLocation {
    /** The unique code for the location country. */
    countryCode?: string;
    /** The offset for timezones where daylight saving time is observed. */
    dstoff?: number;
    /** The time difference in hours from GMT. */
    gmtoff?: number;
    /** The location latitude. */
    latitude?: number;
    /** The location longitude. */
    longitude?: number;
    /** The timezone for the location. */
    timezone?: string;
}
