//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateAudienceContactRequestTagsItemNameStatus } from "./CreateAudienceContactRequestTagsItemNameStatus.js";

export const CreateAudienceContactRequestTagsItemName: core.serialization.ObjectSchema<
    serializers.CreateAudienceContactRequestTagsItemName.Raw,
    Mailchimp.CreateAudienceContactRequestTagsItemName
> = core.serialization.object({
    name: core.serialization.string(),
    status: CreateAudienceContactRequestTagsItemNameStatus,
});

export declare namespace CreateAudienceContactRequestTagsItemName {
    export interface Raw {
        name: string;
        status: CreateAudienceContactRequestTagsItemNameStatus.Raw;
    }
}
