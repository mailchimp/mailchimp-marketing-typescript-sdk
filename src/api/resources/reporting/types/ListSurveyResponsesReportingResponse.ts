//  This file was auto-generated from our API Definition.

export interface ListSurveyResponsesReportingResponse {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: ListSurveyResponsesReportingResponse.Links.Item[] | undefined;
    /** An array of responses to a survey. */
    responses?: ListSurveyResponsesReportingResponse.Responses.Item[] | undefined;
    /** The total number of items matching the query regardless of pagination. */
    total_items?: number | undefined;
}

export namespace ListSurveyResponsesReportingResponse {
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

    export type Responses = Responses.Item[];

    export namespace Responses {
        /**
         * Survey respondent details.
         */
        export interface Item {
            /** Information about the contact. */
            contact?: Item.Contact | undefined;
            /** If this contact was added to the Mailchimp audience via this survey. */
            is_new_contact?: boolean | undefined;
            /** The ID for the survey response. */
            response_id?: string | undefined;
            /** The date and time when the survey response was submitted in ISO 8601 format. */
            submitted_at?: string | undefined;
        }

        export namespace Item {
            /**
             * Information about the contact.
             */
            export interface Contact {
                /** URL for the contact's avatar or profile image. */
                avatar_url?: string | undefined;
                /** Indicates whether a contact consents to 1:1 messaging. */
                consents_to_one_to_one_messaging?: boolean | undefined;
                /** The ID of this contact. */
                contact_id?: string | undefined;
                /** The contact's email address. */
                email?: string | undefined;
                /** The MD5 hash of the lowercase version of the list member's email address. */
                email_id?: string | undefined;
                /** The contact's full name. */
                full_name?: string | undefined;
                /** The contact's sms phone number. */
                phone?: string | undefined;
                /** The contact's current status. */
                status?: Contact.Status | undefined;
            }

            export namespace Contact {
                /** The contact's current status. */
                export const Status = {
                    Subscribed: "Subscribed",
                    Unsubscribed: "Unsubscribed",
                    NonSubscribed: "Non-Subscribed",
                    Cleaned: "Cleaned",
                    Archived: "Archived",
                } as const;
                export type Status = (typeof Status)[keyof typeof Status];
            }
        }
    }
}
