//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const LandingPageReportSignupTagsItem: core.serialization.ObjectSchema<
    serializers.LandingPageReportSignupTagsItem.Raw,
    Mailchimp.LandingPageReportSignupTagsItem
> = core.serialization.object({
    tagId: core.serialization.property("tag_id", core.serialization.number().optional()),
    tagName: core.serialization.property("tag_name", core.serialization.string().optional()),
});

export declare namespace LandingPageReportSignupTagsItem {
    export interface Raw {
        tag_id?: number | null;
        tag_name?: string | null;
    }
}
