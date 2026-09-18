//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { PatchAudienceContactRequestTagsItemName } from "./PatchAudienceContactRequestTagsItemName.js";

export const PatchAudienceContactRequestTagsItem: core.serialization.Schema<
    serializers.PatchAudienceContactRequestTagsItem.Raw,
    Mailchimp.PatchAudienceContactRequestTagsItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), PatchAudienceContactRequestTagsItemName]);

export declare namespace PatchAudienceContactRequestTagsItem {
    export type Raw = string | PatchAudienceContactRequestTagsItemName.Raw;
}
