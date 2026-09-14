//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         list_id: "list_id",
 *         subscriber_hash: "subscriber_hash",
 *         tags: [{
 *                 name: "name",
 *                 status: "inactive"
 *             }]
 *     }
 */
export interface CreateMemberTagListsRequest {
    /** The unique ID for the list. */
    list_id: string;
    /** The MD5 hash of the lowercase version of the list member's email address. */
    subscriber_hash: string;
    /** When is_syncing is true, automations based on the tags in the request will not fire */
    is_syncing?: boolean;
    /** A list of tags assigned to the list member. */
    tags: CreateMemberTagListsRequest.Tags.Item[];
}

export namespace CreateMemberTagListsRequest {
    export type Tags = Tags.Item[];

    export namespace Tags {
        /**
         * Add or remove tags on a member by declaring a tag either active or inactive on a member.
         */
        export interface Item {
            /** The name of the tag. */
            name: string;
            /** The status for the tag on the member, pass in active to add a tag or inactive to remove it. */
            status: Item.Status;
        }

        export namespace Item {
            /** The status for the tag on the member, pass in active to add a tag or inactive to remove it. */
            export const Status = {
                Inactive: "inactive",
                Active: "active",
            } as const;
            export type Status = (typeof Status)[keyof typeof Status];
        }
    }
}
