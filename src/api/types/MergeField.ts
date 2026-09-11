//  This file was auto-generated from our API Definition.

/**
 * A [merge field](https://mailchimp.com/developer/marketing/docs/merge-fields/) for an audience.
 */
export interface MergeField {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: MergeField.Links.Item[] | undefined;
    /** The default value for the merge field if `null`. */
    default_value?: string | undefined;
    /** The order that the merge field displays on the list signup form. */
    display_order?: number | undefined;
    /** Extra text to help the subscriber fill out the form. */
    help_text?: string | undefined;
    /** The ID that identifies this merge field's audience'. */
    list_id?: string | undefined;
    /** The maximum number of merge fields this audience can hold. The limit is determined by the account's plan. Returned on POST responses only. Subtract `total_items` from this value to derive the remaining capacity. */
    merge_field_limit?: number | undefined;
    /** An unchanging id for the merge field. */
    merge_id?: number | undefined;
    /** The name of the merge field (audience field). */
    name?: string | undefined;
    /** Extra options for some merge field types. */
    options?: MergeField.Options | undefined;
    /** Whether the merge field is displayed on the signup form. */
    public?: boolean | undefined;
    /** The boolean value if the merge field is required. */
    required?: boolean | undefined;
    /** The merge tag used for Mailchimp campaigns and [adding contact information](https://mailchimp.com/developer/marketing/docs/merge-fields/#add-merge-data-to-contacts). */
    tag?: string | undefined;
    /** The total number of merge fields on the audience after this field was created. Returned on POST responses only. */
    total_items?: number | undefined;
    /** The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field. */
    type?: MergeField.Type | undefined;
}

export namespace MergeField {
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

    /**
     * Extra options for some merge field types.
     */
    export interface Options {
        /** In a radio or dropdown non-group field, the available options for contacts to pick from. */
        choices?: string[] | undefined;
        /** In a date or birthday field, the format of the date. */
        date_format?: string | undefined;
        /** In an address field, the default country code if none supplied. */
        default_country?: number | undefined;
        /** In a phone field, the phone number type: US or International. */
        phone_format?: string | undefined;
        /** In a text field, the default length of the text field. */
        size?: number | undefined;
    }

    /** The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field. */
    export const Type = {
        Text: "text",
        Number: "number",
        Address: "address",
        Phone: "phone",
        Date: "date",
        Url: "url",
        Imageurl: "imageurl",
        Radio: "radio",
        Dropdown: "dropdown",
        Birthday: "birthday",
        Zip: "zip",
    } as const;
    export type Type = (typeof Type)[keyof typeof Type];
}
