//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const FacebookAdsChannel: core.serialization.ObjectSchema<
    serializers.FacebookAdsChannel.Raw,
    Mailchimp.FacebookAdsChannel
> = core.serialization.object({
    fbPlacementAudience: core.serialization.property("fb_placement_audience", core.serialization.boolean().optional()),
    fbPlacementFeed: core.serialization.property("fb_placement_feed", core.serialization.boolean().optional()),
    igPlacementFeed: core.serialization.property("ig_placement_feed", core.serialization.boolean().optional()),
});

export declare namespace FacebookAdsChannel {
    export interface Raw {
        fb_placement_audience?: boolean | null;
        fb_placement_feed?: boolean | null;
        ig_placement_feed?: boolean | null;
    }
}
