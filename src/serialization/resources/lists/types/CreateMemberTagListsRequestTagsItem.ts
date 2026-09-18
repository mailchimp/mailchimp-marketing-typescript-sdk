//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { CreateMemberTagListsRequestTagsItemStatus } from "./CreateMemberTagListsRequestTagsItemStatus.js";

export const CreateMemberTagListsRequestTagsItem: core.serialization.ObjectSchema<
    serializers.CreateMemberTagListsRequestTagsItem.Raw,
    Mailchimp.CreateMemberTagListsRequestTagsItem
> = core.serialization.object({
    name: core.serialization.string(),
    status: CreateMemberTagListsRequestTagsItemStatus,
});

export declare namespace CreateMemberTagListsRequestTagsItem {
    export interface Raw {
        name: string;
        status: CreateMemberTagListsRequestTagsItemStatus.Raw;
    }
}
