//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const CreateAccountExportsRequestIncludeStagesItem: core.serialization.Schema<
    serializers.CreateAccountExportsRequestIncludeStagesItem.Raw,
    Mailchimp.CreateAccountExportsRequestIncludeStagesItem
> = core.serialization.enum_(["audiences", "campaigns", "events", "gallery_files", "reports", "templates"]);

export declare namespace CreateAccountExportsRequestIncludeStagesItem {
    export type Raw = "audiences" | "campaigns" | "events" | "gallery_files" | "reports" | "templates";
}
