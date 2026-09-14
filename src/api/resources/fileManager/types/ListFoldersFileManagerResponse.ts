//  This file was auto-generated from our API Definition.

/**
 * A list of all folders in the File Manager.
 */
export interface ListFoldersFileManagerResponse {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: ListFoldersFileManagerResponse.Links.Item[] | undefined;
    /** A list of all folders in the File Manager. */
    folders?: ListFoldersFileManagerResponse.Folders.Item[] | undefined;
    /** The total number of items matching the query regardless of pagination. */
    total_items?: number | undefined;
}

export namespace ListFoldersFileManagerResponse {
    export type Links = Links.Item[];

    export namespace Links {
        /**
         * This object represents a link from the resource where it is found to another resource or action that may be performed.
         */
        export interface Item {
            /** This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action. */
            href?: string | undefined;
            /** The HTTP method that should be used when accessing the URL defined in 'href'. */
            method?: Item.Method | undefined;
            /** As with an HTML 'rel' attribute, this describes the type of link. */
            rel?: string | undefined;
            /** For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to. */
            schema?: string | undefined;
            /** For GETs, this is a URL representing the schema that the response should conform to. */
            targetSchema?: string | undefined;
        }

        export namespace Item {
            /** The HTTP method that should be used when accessing the URL defined in 'href'. */
            export const Method = {
                Get: "GET",
                Post: "POST",
                Put: "PUT",
                Patch: "PATCH",
                Delete: "DELETE",
                Options: "OPTIONS",
                Head: "HEAD",
            } as const;
            export type Method = (typeof Method)[keyof typeof Method];
        }
    }

    export type Folders = Folders.Item[];

    export namespace Folders {
        /**
         * An individual folder listed in the File Manager.
         */
        export interface Item {
            /** A list of link types and descriptions for the API schema documents. */
            _links?: Item.Links.Item[] | undefined;
            /** The date and time a file was added to the File Manager in ISO 8601 format. */
            created_at?: string | undefined;
            /** The username of the profile that created the folder. */
            created_by?: string | undefined;
            /** The number of files in the folder. */
            file_count?: number | undefined;
            /** The unique id for the folder. */
            id?: number | undefined;
            /** The name of the folder. */
            name?: string | undefined;
        }

        export namespace Item {
            export type Links = Links.Item[];

            export namespace Links {
                /**
                 * This object represents a link from the resource where it is found to another resource or action that may be performed.
                 */
                export interface Item {
                    /** This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action. */
                    href?: string | undefined;
                    /** The HTTP method that should be used when accessing the URL defined in 'href'. */
                    method?: Item.Method | undefined;
                    /** As with an HTML 'rel' attribute, this describes the type of link. */
                    rel?: string | undefined;
                    /** For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to. */
                    schema?: string | undefined;
                    /** For GETs, this is a URL representing the schema that the response should conform to. */
                    targetSchema?: string | undefined;
                }

                export namespace Item {
                    /** The HTTP method that should be used when accessing the URL defined in 'href'. */
                    export const Method = {
                        Get: "GET",
                        Post: "POST",
                        Put: "PUT",
                        Patch: "PATCH",
                        Delete: "DELETE",
                        Options: "OPTIONS",
                        Head: "HEAD",
                    } as const;
                    export type Method = (typeof Method)[keyof typeof Method];
                }
            }
        }
    }
}
