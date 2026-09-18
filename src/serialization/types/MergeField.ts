//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { MergeFieldLinksItem } from "./MergeFieldLinksItem.js";
import { MergeFieldOptions } from "./MergeFieldOptions.js";
import { MergeFieldType } from "./MergeFieldType.js";

export const MergeField: core.serialization.ObjectSchema<serializers.MergeField.Raw, Mailchimp.MergeField> =
    core.serialization.object({
        links: core.serialization.property("_links", core.serialization.list(MergeFieldLinksItem).optional()),
        defaultValue: core.serialization.property("default_value", core.serialization.string().optional()),
        displayOrder: core.serialization.property("display_order", core.serialization.number().optional()),
        helpText: core.serialization.property("help_text", core.serialization.string().optional()),
        listId: core.serialization.property("list_id", core.serialization.string().optional()),
        mergeFieldLimit: core.serialization.property("merge_field_limit", core.serialization.number().optional()),
        mergeId: core.serialization.property("merge_id", core.serialization.number().optional()),
        name: core.serialization.string().optional(),
        options: MergeFieldOptions.optional(),
        public: core.serialization.boolean().optional(),
        required: core.serialization.boolean().optional(),
        tag: core.serialization.string().optional(),
        totalItems: core.serialization.property("total_items", core.serialization.number().optional()),
        type: MergeFieldType.optional(),
    });

export declare namespace MergeField {
    export interface Raw {
        _links?: MergeFieldLinksItem.Raw[] | null;
        default_value?: string | null;
        display_order?: number | null;
        help_text?: string | null;
        list_id?: string | null;
        merge_field_limit?: number | null;
        merge_id?: number | null;
        name?: string | null;
        options?: MergeFieldOptions.Raw | null;
        public?: boolean | null;
        required?: boolean | null;
        tag?: string | null;
        total_items?: number | null;
        type?: MergeFieldType.Raw | null;
    }
}
