//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListTemplateFoldersResponseFoldersItemLinksItemMethod: core.serialization.Schema<
    serializers.ListTemplateFoldersResponseFoldersItemLinksItemMethod.Raw,
    Mailchimp.ListTemplateFoldersResponseFoldersItemLinksItemMethod
> = core.serialization.enum_(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]);

export declare namespace ListTemplateFoldersResponseFoldersItemLinksItemMethod {
    export type Raw = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
}
