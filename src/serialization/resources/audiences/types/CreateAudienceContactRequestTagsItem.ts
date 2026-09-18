//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateAudienceContactRequestTagsItemName } from "./CreateAudienceContactRequestTagsItemName.js";

export const CreateAudienceContactRequestTagsItem: core.serialization.Schema<
    serializers.CreateAudienceContactRequestTagsItem.Raw,
    Mailchimp.CreateAudienceContactRequestTagsItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), CreateAudienceContactRequestTagsItemName]);

export declare namespace CreateAudienceContactRequestTagsItem {
    export type Raw = string | CreateAudienceContactRequestTagsItemName.Raw;
}
