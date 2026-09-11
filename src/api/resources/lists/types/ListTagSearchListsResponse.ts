//  This file was auto-generated from our API Definition.

/**
 * A list of tags matching the input query.
 */
export interface ListTagSearchListsResponse {
    /** A list of matching tags. */
    tags?: ListTagSearchListsResponse.Tags.Item[] | undefined;
    /** The total number of items matching the query regardless of pagination. */
    total_items?: number | undefined;
}

export namespace ListTagSearchListsResponse {
    export type Tags = Tags.Item[];

    export namespace Tags {
        export interface Item {
            /** The unique id for the tag. */
            id?: number | undefined;
            /** The name of the tag. */
            name?: string | undefined;
        }
    }
}
