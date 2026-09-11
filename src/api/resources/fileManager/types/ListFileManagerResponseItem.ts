//  This file was auto-generated from our API Definition.

/**
 * This object represents a link from the resource where it is found to another resource or action that may be performed.
 */
export interface ListFileManagerResponseItem {
    /** This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action. */
    href?: string | undefined;
    /** The HTTP method that should be used when accessing the URL defined in 'href'. */
    method?: ListFileManagerResponseItem.Method | undefined;
    /** As with an HTML 'rel' attribute, this describes the type of link. */
    rel?: string | undefined;
    /** For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to. */
    schema?: string | undefined;
    /** For GETs, this is a URL representing the schema that the response should conform to. */
    targetSchema?: string | undefined;
}

export namespace ListFileManagerResponseItem {
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
