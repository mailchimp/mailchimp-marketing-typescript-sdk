//  This file was auto-generated from our API Definition.

/**
 * A survey section. On PATCH, include the section id to update it; omit the section from the sections array to delete it (and any question it contains).
 */
export interface SurveySectionRequest {
    /** The section ID. On PATCH, include to update an existing section; omit to add a new section. */
    id?: string | undefined;
    /** The section type. */
    type: SurveySectionRequest.Type;
    /** Rich text content for introduction or context sections. */
    text?: string | undefined;
    /** Additional section options. */
    options?: Record<string, unknown> | undefined;
    /** A survey question. On PATCH, include the question id to update it. Omitting question id creates a new question; it does not delete an existing one. To delete a question, omit its section from the sections array. */
    question?: SurveySectionRequest.Question | undefined;
}

export namespace SurveySectionRequest {
    /** The section type. */
    export const Type = {
        Introduction: "introduction",
        Context: "context",
        Question: "question",
    } as const;
    export type Type = (typeof Type)[keyof typeof Type];

    /**
     * A survey question. On PATCH, include the question id to update it. Omitting question id creates a new question; it does not delete an existing one. To delete a question, omit its section from the sections array.
     */
    export interface Question {
        /** The question ID. On PATCH, include to update an existing question; omit to add a new question. */
        id?: string | undefined;
        /** The question text. */
        query: string;
        /** The response type of the survey question. */
        type: Question.Type;
        /** Whether this question is required. */
        is_required?: boolean | undefined;
        /** Whether this question has an 'other' option. */
        has_other?: boolean | undefined;
        /** Label for the 'other' option. */
        other_label?: string | undefined;
        /** Label for the low end of a range question. */
        range_low_label?: string | undefined;
        /** Label for the high end of a range question. */
        range_high_label?: string | undefined;
        /** Low value for a range question. */
        range_low_value?: number | undefined;
        /** High value for a range question. */
        range_high_value?: number | undefined;
        /** How a range question is presented. */
        range_presentation?: string | undefined;
        /** Placeholder text for text or email questions. */
        placeholder_label?: string | undefined;
        /** Whether the subscribe checkbox is enabled. */
        subscribe_checkbox_enabled?: boolean | undefined;
        /** Label for the subscribe checkbox. */
        subscribe_checkbox_label?: string | undefined;
        /** Whether responses should automatically apply tags. */
        should_auto_tag?: boolean | undefined;
        /** Answer options for pickOne, pickMany, or dropdown questions. */
        options?: Question.Options.Item[] | undefined;
        /** Merge field mapping for contact information questions. */
        merge_field?: Record<string, unknown> | undefined;
    }

    export namespace Question {
        /** The response type of the survey question. */
        export const Type = {
            PickOne: "pickOne",
            PickMany: "pickMany",
            Range: "range",
            Text: "text",
            Email: "email",
            ContactInformation: "contactInformation",
            Dropdown: "dropdown",
        } as const;
        export type Type = (typeof Type)[keyof typeof Type];
        export type Options = Options.Item[];

        export namespace Options {
            export interface Item {
                label: string;
                value: string;
            }
        }
    }
}
