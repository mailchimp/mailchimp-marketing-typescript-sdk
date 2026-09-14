//  This file was auto-generated from our API Definition.

/**
 * A single survey response.
 */
export interface GetSurveyResponsReportingResponse {
    /** Information about the contact. */
    contact?: GetSurveyResponsReportingResponse.Contact | undefined;
    /** If this contact was added to the Mailchimp audience via this survey. */
    is_new_contact?: boolean | undefined;
    /** The ID for the survey response. */
    response_id?: string | undefined;
    /** The survey questions and the answers to those questions. */
    results?: GetSurveyResponsReportingResponse.Results.Item[] | undefined;
    /** The date and time when the survey response was submitted in ISO 8601 format. */
    submitted_at?: string | undefined;
}

export namespace GetSurveyResponsReportingResponse {
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

    export type Results = Results.Item[];

    export namespace Results {
        /**
         * A single question and the response to that question.
         */
        export interface Item {
            /** The answer to this survey question. */
            answer?: string | undefined;
            /** The survey question. */
            query?: string | undefined;
            /** The unique ID for this question. */
            question_id?: string | undefined;
            /** The type of question this is. */
            question_type?: Item.QuestionType | undefined;
        }

        export namespace Item {
            /** The type of question this is. */
            export const QuestionType = {
                PickOne: "pickOne",
                PickMany: "pickMany",
                Range: "range",
                Text: "text",
                Email: "email",
                ContactInformation: "contactInformation",
                Dropdown: "dropdown",
            } as const;
            export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType];
        }
    }
}
