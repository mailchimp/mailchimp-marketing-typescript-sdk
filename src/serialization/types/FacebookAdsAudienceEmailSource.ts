//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const FacebookAdsAudienceEmailSource: core.serialization.ObjectSchema<
    serializers.FacebookAdsAudienceEmailSource.Raw,
    Mailchimp.FacebookAdsAudienceEmailSource
> = core.serialization.object({
    isSegment: core.serialization.property("is_segment", core.serialization.boolean().optional()),
    listName: core.serialization.property("list_name", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    segmentType: core.serialization.property("segment_type", core.serialization.string().optional()),
    type: core.serialization.string().optional(),
});

export declare namespace FacebookAdsAudienceEmailSource {
    export interface Raw {
        is_segment?: boolean | null;
        list_name?: string | null;
        name?: string | null;
        segment_type?: string | null;
        type?: string | null;
    }
}
