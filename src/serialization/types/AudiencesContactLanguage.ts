//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";

export const AudiencesContactLanguage: core.serialization.Schema<
    serializers.AudiencesContactLanguage.Raw,
    Mailchimp.AudiencesContactLanguage
> = core.serialization.enum_([
    "",
    "en",
    "ar",
    "af",
    "be",
    "bg",
    "ca",
    "zh",
    "zh_CN",
    "hr",
    "cs",
    "da",
    "nl",
    "et",
    "fa",
    "fi",
    "fr",
    "fr_CA",
    "de",
    "el",
    "he",
    "hi",
    "hu",
    "is",
    "id",
    "ga",
    "it",
    "ja",
    "km",
    "ko",
    "lv",
    "lt",
    "mt",
    "ms",
    "mk",
    "no",
    "pl",
    "pt",
    "pt_PT",
    "ro",
    "ru",
    "sr",
    "sk",
    "sl",
    "es",
    "es_ES",
    "sw",
    "sv",
    "ta",
    "th",
    "tr",
    "uk",
    "vi",
]);

export declare namespace AudiencesContactLanguage {
    export type Raw =
        | ""
        | "en"
        | "ar"
        | "af"
        | "be"
        | "bg"
        | "ca"
        | "zh"
        | "zh_CN"
        | "hr"
        | "cs"
        | "da"
        | "nl"
        | "et"
        | "fa"
        | "fi"
        | "fr"
        | "fr_CA"
        | "de"
        | "el"
        | "he"
        | "hi"
        | "hu"
        | "is"
        | "id"
        | "ga"
        | "it"
        | "ja"
        | "km"
        | "ko"
        | "lv"
        | "lt"
        | "mt"
        | "ms"
        | "mk"
        | "no"
        | "pl"
        | "pt"
        | "pt_PT"
        | "ro"
        | "ru"
        | "sr"
        | "sk"
        | "sl"
        | "es"
        | "es_ES"
        | "sw"
        | "sv"
        | "ta"
        | "th"
        | "tr"
        | "uk"
        | "vi";
}
