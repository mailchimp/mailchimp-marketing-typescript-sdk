//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import type * as serializers from "../../../index.js";
import { GetAccountExportsResponseLinksItem } from "./GetAccountExportsResponseLinksItem.js";

export const GetAccountExportsResponse: core.serialization.ObjectSchema<
    serializers.GetAccountExportsResponse.Raw,
    Mailchimp.GetAccountExportsResponse
> = core.serialization.object({
    links: core.serialization.property(
        "_links",
        core.serialization.list(GetAccountExportsResponseLinksItem).optional(),
    ),
    downloadUrl: core.serialization.property("download_url", core.serialization.string().optional()),
    exportId: core.serialization.property("export_id", core.serialization.number().optional()),
    finished: core.serialization.date().optional(),
    sizeInBytes: core.serialization.property("size_in_bytes", core.serialization.number().optional()),
    started: core.serialization.date().optional(),
});

export declare namespace GetAccountExportsResponse {
    export interface Raw {
        _links?: GetAccountExportsResponseLinksItem.Raw[] | null;
        download_url?: string | null;
        export_id?: number | null;
        finished?: string | null;
        size_in_bytes?: number | null;
        started?: string | null;
    }
}
