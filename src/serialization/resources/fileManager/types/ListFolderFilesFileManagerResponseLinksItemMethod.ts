//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";

export const ListFolderFilesFileManagerResponseLinksItemMethod: core.serialization.Schema<
    serializers.ListFolderFilesFileManagerResponseLinksItemMethod.Raw,
    Mailchimp.ListFolderFilesFileManagerResponseLinksItemMethod
> = core.serialization.enum_(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]);

export declare namespace ListFolderFilesFileManagerResponseLinksItemMethod {
    export type Raw = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
}
