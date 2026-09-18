//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const SegmentTypeItemSocialNetworkMemberValue: core.serialization.Schema<
    serializers.SegmentTypeItemSocialNetworkMemberValue.Raw,
    Mailchimp.SegmentTypeItemSocialNetworkMemberValue
> = core.serialization.enum_([
    "twitter",
    "facebook",
    "linkedin",
    "flickr",
    "foursquare",
    "lastfm",
    "myspace",
    "quora",
    "vimeo",
    "yelp",
    "youtube",
]);

export declare namespace SegmentTypeItemSocialNetworkMemberValue {
    export type Raw =
        | "twitter"
        | "facebook"
        | "linkedin"
        | "flickr"
        | "foursquare"
        | "lastfm"
        | "myspace"
        | "quora"
        | "vimeo"
        | "yelp"
        | "youtube";
}
