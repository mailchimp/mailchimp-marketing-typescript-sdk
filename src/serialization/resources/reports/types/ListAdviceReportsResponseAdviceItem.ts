//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { ListAdviceReportsResponseAdviceItemLinksItem } from "./ListAdviceReportsResponseAdviceItemLinksItem.js";
import { ListAdviceReportsResponseAdviceItemType } from "./ListAdviceReportsResponseAdviceItemType.js";

export const ListAdviceReportsResponseAdviceItem: core.serialization.ObjectSchema<
    serializers.ListAdviceReportsResponseAdviceItem.Raw,
    Mailchimp.ListAdviceReportsResponseAdviceItem
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(ListAdviceReportsResponseAdviceItemLinksItem).optional(),
    ),
    message: core.serialization.string().optional(),
    type: ListAdviceReportsResponseAdviceItemType.optional(),
});

export declare namespace ListAdviceReportsResponseAdviceItem {
    export interface Raw {
        _links?: ListAdviceReportsResponseAdviceItemLinksItem.Raw[] | null;
        message?: string | null;
        type?: ListAdviceReportsResponseAdviceItemType.Raw | null;
    }
}
