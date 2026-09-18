//  This file was auto-generated from our API Definition.

/** The type of activity */
export const ListChimpChatterActivityFeedResponseChimpChatterItemType = {
    ListsNewSubscriber: "lists:new-subscriber",
    ListsUnsubscribes: "lists:unsubscribes",
    ListsProfileUpdates: "lists:profile-updates",
    CampaignsFacebookLikes: "campaigns:facebook-likes",
    CampaignsForwardToFriend: "campaigns:forward-to-friend",
    ListsImports: "lists:imports",
} as const;
export type ListChimpChatterActivityFeedResponseChimpChatterItemType =
    (typeof ListChimpChatterActivityFeedResponseChimpChatterItemType)[keyof typeof ListChimpChatterActivityFeedResponseChimpChatterItemType];
