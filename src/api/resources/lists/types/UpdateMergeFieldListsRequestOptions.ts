//  This file was auto-generated from our API Definition.

/**
 * Extra options for some merge field types.
 */
export interface UpdateMergeFieldListsRequestOptions {
    /** In a radio or dropdown non-group field, the available options for members to pick from. */
    choices?: string[];
    /** In a date or birthday field, the format of the date. */
    dateFormat?: string;
    /** In an address field, the default country code if none supplied. */
    defaultCountry?: number;
    /** In a phone field, the phone number type: US or International. */
    phoneFormat?: string;
}
