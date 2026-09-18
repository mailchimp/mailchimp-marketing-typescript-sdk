//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../../../index.js";

/**
 * @example
 *     {
 *         includeStages: ["audiences", "gallery_files"]
 *     }
 */
export interface CreateAccountExportsRequest {
    /** The stages of an account export to include. */
    includeStages: Mailchimp.CreateAccountExportsRequestIncludeStagesItem[];
    /** An ISO 8601 date that will limit the export to only records created after a given time. For instance, the reports stage will contain any campaign sent after the given timestamp. Audiences, however, are excluded from this limit. */
    sinceTimestamp?: Date;
}
