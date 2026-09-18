//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../index.js";

/**
 * An account export.
 */
export interface GetAccountExportsResponse {
    /** A list of link types and descriptions for the API schema documents. */
    links?: Mailchimp.GetAccountExportsResponseLinksItem[];
    /** If the export is finished, the download URL for an export. URLs are only valid for 90 days after the export completes. */
    downloadUrl?: string;
    /** The ID for the export. */
    exportId?: number;
    /** If finished, the finish time for the export. */
    finished?: Date;
    /** The size of the uncompressed export in bytes. */
    sizeInBytes?: number;
    /** Start time for the export. */
    started?: Date;
}
