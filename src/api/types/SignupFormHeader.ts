//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

/**
 * Options for customizing your signup form header.
 */
export interface SignupFormHeader {
    /** Image alignment. */
    imageAlign?: Mailchimp.SignupFormHeaderImageAlign;
    /** Alt text for the image. */
    imageAlt?: string;
    /** Image border color. */
    imageBorderColor?: string;
    /** Image border style. */
    imageBorderStyle?: Mailchimp.SignupFormHeaderImageBorderStyle;
    /** Image border width. */
    imageBorderWidth?: string;
    /** Image height, in pixels. */
    imageHeight?: string;
    /** The URL that the header image will link to. */
    imageLink?: string;
    /** Image link target. */
    imageTarget?: Mailchimp.SignupFormHeaderImageTarget;
    /** Header image URL. */
    imageUrl?: string;
    /** Image width, in pixels. */
    imageWidth?: string;
    /** Header text. */
    text?: string;
}
