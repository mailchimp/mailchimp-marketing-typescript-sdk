//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         include_stages: ["audiences", "gallery_files"]
 *     }
 */
export interface CreateAccountExportsRequest {
    /** The stages of an account export to include. */
    include_stages: CreateAccountExportsRequest.IncludeStages.Item[];
    /** An ISO 8601 date that will limit the export to only records created after a given time. For instance, the reports stage will contain any campaign sent after the given timestamp. Audiences, however, are excluded from this limit. */
    since_timestamp?: string;
}

export namespace CreateAccountExportsRequest {
    export type IncludeStages = IncludeStages.Item[];

    export namespace IncludeStages {
        export const Item = {
            Audiences: "audiences",
            Campaigns: "campaigns",
            Events: "events",
            GalleryFiles: "gallery_files",
            Reports: "reports",
            Templates: "templates",
        } as const;
        export type Item = (typeof Item)[keyof typeof Item];
    }
}
