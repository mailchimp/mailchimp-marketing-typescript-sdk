//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { PatchAudienceContactRequestTagsItemNameStatus } from "./PatchAudienceContactRequestTagsItemNameStatus.js";

export const PatchAudienceContactRequestTagsItemName: core.serialization.ObjectSchema<
    serializers.PatchAudienceContactRequestTagsItemName.Raw,
    Mailchimp.PatchAudienceContactRequestTagsItemName
> = core.serialization.object({
    name: core.serialization.string(),
    status: PatchAudienceContactRequestTagsItemNameStatus,
});

export declare namespace PatchAudienceContactRequestTagsItemName {
    export interface Raw {
        name: string;
        status: PatchAudienceContactRequestTagsItemNameStatus.Raw;
    }
}
