//  This file was auto-generated from our API Definition.

/**
 * A single marketing permission a subscriber has either opted-in to or opted-out of.
 */
export interface UpsertMemberListsRequestMarketingPermissionsItem {
    /** If the subscriber has opted-in to the marketing permission. */
    enabled?: boolean;
    /** The id for the marketing permission on the list */
    marketingPermissionId?: string;
}
