//  This file was auto-generated from our API Definition.

/**
 * List signup form.
 */
export interface SignupForm {
    /** A list of link types and descriptions for the API schema documents. */
    _links?: SignupForm.Links.Item[] | undefined;
    /** The signup form body content. */
    contents?: SignupForm.Contents.Item[] | undefined;
    /** Options for customizing your signup form header. */
    header?: SignupForm.Header | undefined;
    /** The signup form's list id. */
    list_id?: string | undefined;
    /** Signup form URL. */
    signup_form_url?: string | undefined;
    /** An array of objects, each representing an element style for the signup form. */
    styles?: SignupForm.Styles.Item[] | undefined;
}

export namespace SignupForm {
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

    export type Contents = Contents.Item[];

    export namespace Contents {
        /**
         * Collection of Content for List Signup Forms.
         */
        export interface Item {
            /** The content section name. */
            section?: Item.Section | undefined;
            /** The content section text. */
            value?: string | undefined;
        }

        export namespace Item {
            /** The content section name. */
            export const Section = {
                SignupMessage: "signup_message",
                UnsubMessage: "unsub_message",
                SignupThankYouTitle: "signup_thank_you_title",
            } as const;
            export type Section = (typeof Section)[keyof typeof Section];
        }
    }

    /**
     * Options for customizing your signup form header.
     */
    export interface Header {
        /** Image alignment. */
        image_align?: Header.ImageAlign | undefined;
        /** Alt text for the image. */
        image_alt?: string | undefined;
        /** Image border color. */
        image_border_color?: string | undefined;
        /** Image border style. */
        image_border_style?: Header.ImageBorderStyle | undefined;
        /** Image border width. */
        image_border_width?: string | undefined;
        /** Image height, in pixels. */
        image_height?: string | undefined;
        /** The URL that the header image will link to. */
        image_link?: string | undefined;
        /** Image link target. */
        image_target?: Header.ImageTarget | undefined;
        /** Header image URL. */
        image_url?: string | undefined;
        /** Image width, in pixels. */
        image_width?: string | undefined;
        /** Header text. */
        text?: string | undefined;
    }

    export namespace Header {
        /** Image alignment. */
        export const ImageAlign = {
            None: "none",
            Left: "left",
            Center: "center",
            Right: "right",
        } as const;
        export type ImageAlign = (typeof ImageAlign)[keyof typeof ImageAlign];
        /** Image border style. */
        export const ImageBorderStyle = {
            None: "none",
            Solid: "solid",
            Dotted: "dotted",
            Dashed: "dashed",
            Double: "double",
            Groove: "groove",
            Outset: "outset",
            Inset: "inset",
            Ridge: "ridge",
        } as const;
        export type ImageBorderStyle = (typeof ImageBorderStyle)[keyof typeof ImageBorderStyle];
        /** Image link target. */
        export const ImageTarget = {
            Blank: "_blank",
            Null: "null",
        } as const;
        export type ImageTarget = (typeof ImageTarget)[keyof typeof ImageTarget];
    }

    export type Styles = Styles.Item[];

    export namespace Styles {
        /**
         * Collection of Element style for List Signup Forms.
         */
        export interface Item {
            /** A collection of options for a selector. */
            options?: Item.Options.Item[] | undefined;
            /** A string that identifies the element selector. */
            selector?: Item.Selector | undefined;
        }

        export namespace Item {
            export type Options = Options.Item[];

            export namespace Options {
                /**
                 * An option for Signup Form Styles.
                 */
                export interface Item {
                    /** A string that identifies the property. */
                    property?: string | undefined;
                    /** A string that identifies value of the property. */
                    value?: string | undefined;
                }
            }

            /** A string that identifies the element selector. */
            export const Selector = {
                PageBackground: "page_background",
                PageHeader: "page_header",
                PageOuterWrapper: "page_outer_wrapper",
                BodyBackground: "body_background",
                BodyLinkStyle: "body_link_style",
                FormsButtons: "forms_buttons",
                FormsButtonsHovered: "forms_buttons_hovered",
                FormsFieldLabel: "forms_field_label",
                FormsFieldText: "forms_field_text",
                FormsRequired: "forms_required",
                FormsRequiredLegend: "forms_required_legend",
                FormsHelpText: "forms_help_text",
                FormsErrors: "forms_errors",
                MonkeyRewardsBadge: "monkey_rewards_badge",
            } as const;
            export type Selector = (typeof Selector)[keyof typeof Selector];
        }
    }
}
