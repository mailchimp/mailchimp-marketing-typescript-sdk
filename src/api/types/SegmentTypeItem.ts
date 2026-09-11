//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../index.js";

export type SegmentTypeItem =
    /**
     * Segment by interaction with a specific campaign. */
    | Mailchimp.SegmentTypeItem.Aim
    /**
     * Segment by interaction with an Automation workflow. */
    | Mailchimp.SegmentTypeItem.Automation
    /**
     * Segment by poll activity. */
    | Mailchimp.SegmentTypeItem.CampaignPoll
    /**
     * Segment by interaction with a campaign via Conversations. */
    | Mailchimp.SegmentTypeItem.Conversation
    /**
     * Segment by a specific date field. */
    | Mailchimp.SegmentTypeItem.Date
    /**
     * Segment by use of a particular email client. */
    | Mailchimp.SegmentTypeItem.EmailClient
    /**
     * Segment by language. */
    | Mailchimp.SegmentTypeItem.Language
    /**
     * Segment by member rating. */
    | Mailchimp.SegmentTypeItem.MemberRating
    /**
     * Segment by signup source. */
    | Mailchimp.SegmentTypeItem.SignupSource
    /**
     * Segment by interaction with a SurveyMonkey survey. */
    | Mailchimp.SegmentTypeItem.SurveyMonkey
    /**
     * Segment by VIP status. */
    | Mailchimp.SegmentTypeItem.Vip
    /**
     * Segment by an interest group merge field. */
    | Mailchimp.SegmentTypeItem.Interests
    /**
     * Segment by purchases in specific items or categories. */
    | Mailchimp.SegmentTypeItem.EcommCategory
    /**
     * Segment by average spent total, number of orders, total number of products purchased, or average number of products per order. */
    | Mailchimp.SegmentTypeItem.EcommNumber
    /**
     * Segment by whether someone has purchased anything. */
    | Mailchimp.SegmentTypeItem.EcommPurchased
    /**
     * Segment by amount spent on a single order or across all orders. */
    | Mailchimp.SegmentTypeItem.EcommSpent
    /**
     * Segment by purchases from a specific store. */
    | Mailchimp.SegmentTypeItem.EcommStore
    /**
     * Segment by Goal activity. */
    | Mailchimp.SegmentTypeItem.GoalActivity
    /**
     * Segment by most recent interaction with a website. */
    | Mailchimp.SegmentTypeItem.GoalTimestamp
    /**
     * Segment by similar subscribers. */
    | Mailchimp.SegmentTypeItem.FuzzySegment
    /**
     * Segment by a given static segment. */
    | Mailchimp.SegmentTypeItem.StaticSegment
    /**
     * Segment by a specific country or US state. */
    | Mailchimp.SegmentTypeItem.IpGeoCountryState
    /**
     * Segment by a specific geographic region. */
    | Mailchimp.SegmentTypeItem.IpGeoIn
    /**
     * Segment by a specific US ZIP code. */
    | Mailchimp.SegmentTypeItem.IpGeoInZip
    /**
     * Segment members whose location information is unknown. */
    | Mailchimp.SegmentTypeItem.IpGeoUnknown
    /**
     * Segment by a specific US ZIP code. */
    | Mailchimp.SegmentTypeItem.IpGeoZip
    /**
     * Segment by age ranges in Social Profiles data. */
    | Mailchimp.SegmentTypeItem.SocialAge
    /**
     * Segment by listed gender in Social Profiles data. */
    | Mailchimp.SegmentTypeItem.SocialGender
    /**
     * Segment by influence rating in Social Profiles data. */
    | Mailchimp.SegmentTypeItem.SocialInfluence
    /**
     * Segment by social network in Social Profiles data. */
    | Mailchimp.SegmentTypeItem.SocialNetworkMember
    /**
     * Segment by social network in Social Profiles data. */
    | Mailchimp.SegmentTypeItem.SocialNetworkFollow
    /**
     * Segment by an address-type merge field. */
    | Mailchimp.SegmentTypeItem.AddressMerge
    /**
     * Segment by an address-type merge field within a given distance. */
    | Mailchimp.SegmentTypeItem.ZipMerge
    /**
     * Segment by a contact's birthday. */
    | Mailchimp.SegmentTypeItem.BirthdayMerge
    /**
     * Segment by a given date merge field. */
    | Mailchimp.SegmentTypeItem.DateMerge
    /**
     * An individual segment condition */
    | Mailchimp.SegmentTypeItem.SelectMerge
    /**
     * Segment by a given text or number merge field. */
    | Mailchimp.SegmentTypeItem.TextMerge
    /**
     * Segment by email address. */
    | Mailchimp.SegmentTypeItem.EmailAddress
    /**
     * Segment by predicted gender. */
    | Mailchimp.SegmentTypeItem.PredictedGender
    /**
     * Segment by predicted age. */
    | Mailchimp.SegmentTypeItem.PredictedAge
    /**
     * Segment by when people subscribed. */
    | Mailchimp.SegmentTypeItem.NewSubscribers;

export namespace SegmentTypeItem {
    export interface Aim {
        condition_type: "Aim";
        /** Segment by interaction with a specific campaign. */
        field?: SegmentTypeItemAim.Field | undefined;
        /** The status of the member with regard to their campaign interaction. One of the following: opened, clicked, was sent, didn't open, didn't click, or was not sent. */
        op?: SegmentTypeItemAim.Op | undefined;
        /** Either the web id value for a specific campaign or 'any' to account for subscribers who have/have not interacted with any campaigns. */
        value?: string | undefined;
    }

    export namespace SegmentTypeItemAim {
        /** Segment by interaction with a specific campaign. */
        export const Field = {
            Aim: "aim",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** The status of the member with regard to their campaign interaction. One of the following: opened, clicked, was sent, didn't open, didn't click, or was not sent. */
        export const Op = {
            Open: "open",
            Click: "click",
            Sent: "sent",
            Noopen: "noopen",
            Noclick: "noclick",
            Nosent: "nosent",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface Automation {
        condition_type: "Automation";
        /** Segment by interaction with an Automation workflow. */
        field: SegmentTypeItemAutomation.Field;
        /** The status of the member with regard to the automation workflow. One of the following: has started the workflow, has completed the workflow, has not started the workflow, or has not completed the workflow. */
        op: SegmentTypeItemAutomation.Op;
        /** The web id for the automation workflow to segment against. */
        value: string;
    }

    export namespace SegmentTypeItemAutomation {
        /** Segment by interaction with an Automation workflow. */
        export const Field = {
            Automation: "automation",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** The status of the member with regard to the automation workflow. One of the following: has started the workflow, has completed the workflow, has not started the workflow, or has not completed the workflow. */
        export const Op = {
            Started: "started",
            Completed: "completed",
            NotStarted: "not_started",
            NotCompleted: "not_completed",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface CampaignPoll {
        condition_type: "CampaignPoll";
        /** Segment by poll activity. */
        field: SegmentTypeItemCampaignPoll.Field;
        /** Members have/have not interacted with a specific poll in a Mailchimp email. */
        op: SegmentTypeItemCampaignPoll.Op;
        /** The id for the poll. */
        value: number;
    }

    export namespace SegmentTypeItemCampaignPoll {
        /** Segment by poll activity. */
        export const Field = {
            Poll: "poll",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Members have/have not interacted with a specific poll in a Mailchimp email. */
        export const Op = {
            Member: "member",
            Notmember: "notmember",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface Conversation {
        condition_type: "Conversation";
        /** Segment by interaction with a campaign via Conversations. */
        field: SegmentTypeItemConversation.Field;
        /** The status of a member's interaction with a conversation. One of the following: has replied or has not replied. */
        op: SegmentTypeItemConversation.Op;
        /** The web id value for a specific campaign or 'any' to account for subscribers who have/have not interacted with any campaigns. */
        value: string;
    }

    export namespace SegmentTypeItemConversation {
        /** Segment by interaction with a campaign via Conversations. */
        export const Field = {
            Conversation: "conversation",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** The status of a member's interaction with a conversation. One of the following: has replied or has not replied. */
        export const Op = {
            Member: "member",
            Notmember: "notmember",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface Date {
        condition_type: "globalThis.Date";
        /** When segmenting on 'date' or 'campaign', the date for the segment formatted as YYYY-MM-DD or the web id for the campaign. */
        extra?: string | undefined;
        /** The type of date field to segment on: The opt-in time for a signup, the date the subscriber was last updated, or the date of their last ecomm purchase. */
        field: SegmentTypeItemDate.Field;
        /** When the event took place:  Before, after, is a specific date, is not a specific date, is blank, or is not blank. */
        op: SegmentTypeItemDate.Op;
        /** What type of data to segment on: a specific date, a specific campaign, or the last campaign sent. */
        value: string;
    }

    export namespace SegmentTypeItemDate {
        /** The type of date field to segment on: The opt-in time for a signup, the date the subscriber was last updated, or the date of their last ecomm purchase. */
        export const Field = {
            TimestampOpt: "timestamp_opt",
            InfoChanged: "info_changed",
            EcommDate: "ecomm_date",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** When the event took place:  Before, after, is a specific date, is not a specific date, is blank, or is not blank. */
        export const Op = {
            Greater: "greater",
            Less: "less",
            Is: "is",
            Not: "not",
            Blank: "blank",
            BlankNot: "blank_not",
            Within: "within",
            Notwithin: "notwithin",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface EmailClient {
        condition_type: "EmailClient";
        /** Segment by use of a particular email client. */
        field: SegmentTypeItemEmailClient.Field;
        /** The operation to determine whether we select clients that match the value, or clients that do not match the value. */
        op: SegmentTypeItemEmailClient.Op;
        /** The name of the email client. */
        value: string;
    }

    export namespace SegmentTypeItemEmailClient {
        /** Segment by use of a particular email client. */
        export const Field = {
            EmailClient: "email_client",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** The operation to determine whether we select clients that match the value, or clients that do not match the value. */
        export const Op = {
            ClientIs: "client_is",
            ClientNot: "client_not",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface Language {
        condition_type: "Language";
        /** Segmenting based off of a subscriber's language. */
        field: SegmentTypeItemLanguage.Field;
        /** Whether the member's language is or is not set to a specific language. */
        op: SegmentTypeItemLanguage.Op;
        /** A two-letter language identifier. */
        value: string;
    }

    export namespace SegmentTypeItemLanguage {
        /** Segmenting based off of a subscriber's language. */
        export const Field = {
            Language: "language",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Whether the member's language is or is not set to a specific language. */
        export const Op = {
            Is: "is",
            Not: "not",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface MemberRating {
        condition_type: "MemberRating";
        /** Segment by member rating. */
        field: SegmentTypeItemMemberRating.Field;
        /** Members who have have a rating that is/not exactly a given number or members who have a rating greater/less than a given number. */
        op: SegmentTypeItemMemberRating.Op;
        value: SegmentTypeItemMemberRating.Value;
    }

    export namespace SegmentTypeItemMemberRating {
        /** Segment by member rating. */
        export const Field = {
            Rating: "rating",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Members who have have a rating that is/not exactly a given number or members who have a rating greater/less than a given number. */
        export const Op = {
            Is: "is",
            Not: "not",
            Greater: "greater",
            Less: "less",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
        export type Value = number | string;
    }

    export interface SignupSource {
        condition_type: "SignupSource";
        field: SegmentTypeItemSignupSource.Field;
        /** Whether the member's signup source was/was not a particular value. */
        op: SegmentTypeItemSignupSource.Op;
        /** The signup source. */
        value?: string | undefined;
    }

    export namespace SegmentTypeItemSignupSource {
        export const Field = {
            Source: "source",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Whether the member's signup source was/was not a particular value. */
        export const Op = {
            SourceIs: "source_is",
            SourceNot: "source_not",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface SurveyMonkey {
        condition_type: "SurveyMonkey";
        /** Segment by interaction with a SurveyMonkey survey. */
        field: SegmentTypeItemSurveyMonkey.Field;
        /** The status of the member with regard to the survey.One of the following: has started the survey, has completed the survey, has not started the survey, or has not completed the survey. */
        op: SegmentTypeItemSurveyMonkey.Op;
        /** The unique ID of the survey monkey survey. */
        value: string;
    }

    export namespace SegmentTypeItemSurveyMonkey {
        /** Segment by interaction with a SurveyMonkey survey. */
        export const Field = {
            SurveyMonkey: "survey_monkey",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** The status of the member with regard to the survey.One of the following: has started the survey, has completed the survey, has not started the survey, or has not completed the survey. */
        export const Op = {
            Started: "started",
            Completed: "completed",
            NotStarted: "not_started",
            NotCompleted: "not_completed",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface Vip {
        condition_type: "VIP";
        /** Segment by VIP status. */
        field: SegmentTypeItemVip.Field;
        /** Whether the member is or is not marked as VIP. */
        op: SegmentTypeItemVip.Op;
    }

    export namespace SegmentTypeItemVip {
        /** Segment by VIP status. */
        export const Field = {
            Gmonkey: "gmonkey",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Whether the member is or is not marked as VIP. */
        export const Op = {
            Member: "member",
            Notmember: "notmember",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface Interests {
        condition_type: "Interests";
        /** Segmenting based on interest group information. This should start with 'interests-' followed by the grouping id. Ex. 'interests-123'. */
        field?: string | undefined;
        /** Whether the member is a part of one, all, or none of the groups. */
        op?: SegmentTypeItemInterests.Op | undefined;
        /** An array containing strings, each representing a group id. */
        value?: string[] | undefined;
    }

    export namespace SegmentTypeItemInterests {
        /** Whether the member is a part of one, all, or none of the groups. */
        export const Op = {
            Interestcontains: "interestcontains",
            Interestcontainsall: "interestcontainsall",
            Interestnotcontains: "interestnotcontains",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface EcommCategory {
        condition_type: "EcommCategory";
        /** Segment by purchases in specific items or categories. */
        field?: SegmentTypeItemEcommCategory.Field | undefined;
        /** A member who has purchased from a category/specific item that is/is not a specific name, where the category/item name contains/doesn't contain a specific phrase or string, or a category/item name that starts/ends with a string. */
        op?: SegmentTypeItemEcommCategory.Op | undefined;
        /** The ecommerce category/item information. */
        value?: string | undefined;
    }

    export namespace SegmentTypeItemEcommCategory {
        /** Segment by purchases in specific items or categories. */
        export const Field = {
            EcommCat: "ecomm_cat",
            EcommProd: "ecomm_prod",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** A member who has purchased from a category/specific item that is/is not a specific name, where the category/item name contains/doesn't contain a specific phrase or string, or a category/item name that starts/ends with a string. */
        export const Op = {
            Is: "is",
            Not: "not",
            Contains: "contains",
            Notcontain: "notcontain",
            Starts: "starts",
            Ends: "ends",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface EcommNumber {
        condition_type: "EcommNumber";
        /** Segment by average spent total, number of orders, total number of products purchased, or average number of products per order. */
        field: SegmentTypeItemEcommNumber.Field;
        /** Members who have spent exactly, have not spent exactly, spent more, or spent less than the segment value. */
        op: SegmentTypeItemEcommNumber.Op;
        value: SegmentTypeItemEcommNumber.Value;
    }

    export namespace SegmentTypeItemEcommNumber {
        /** Segment by average spent total, number of orders, total number of products purchased, or average number of products per order. */
        export const Field = {
            EcommSpentAvg: "ecomm_spent_avg",
            EcommOrders: "ecomm_orders",
            EcommProdAll: "ecomm_prod_all",
            EcommAvgOrd: "ecomm_avg_ord",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Members who have spent exactly, have not spent exactly, spent more, or spent less than the segment value. */
        export const Op = {
            Is: "is",
            Not: "not",
            Greater: "greater",
            Less: "less",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
        export type Value = number | string;
    }

    export interface EcommPurchased {
        condition_type: "EcommPurchased";
        /** Segment by whether someone has purchased anything. */
        field?: SegmentTypeItemEcommPurchased.Field | undefined;
        /** Members who have have ('member') or have not ('notmember') purchased. */
        op?: SegmentTypeItemEcommPurchased.Op | undefined;
    }

    export namespace SegmentTypeItemEcommPurchased {
        /** Segment by whether someone has purchased anything. */
        export const Field = {
            EcommPurchased: "ecomm_purchased",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Members who have have ('member') or have not ('notmember') purchased. */
        export const Op = {
            Member: "member",
            Notmember: "notmember",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface EcommSpent {
        condition_type: "EcommSpent";
        /** Segment by amount spent on a single order or across all orders. */
        field?: SegmentTypeItemEcommSpent.Field | undefined;
        /** Members who have spent 'more' or 'less' than then specified value. */
        op?: SegmentTypeItemEcommSpent.Op | undefined;
        value?: SegmentTypeItemEcommSpent.Value | undefined;
    }

    export namespace SegmentTypeItemEcommSpent {
        /** Segment by amount spent on a single order or across all orders. */
        export const Field = {
            EcommSpentOne: "ecomm_spent_one",
            EcommSpentAll: "ecomm_spent_all",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Members who have spent 'more' or 'less' than then specified value. */
        export const Op = {
            Greater: "greater",
            Less: "less",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
        export type Value = number | string;
    }

    export interface EcommStore {
        condition_type: "EcommStore";
        /** Segment by purchases from a specific store. */
        field?: SegmentTypeItemEcommStore.Field | undefined;
        /** Members who have or have not purchased from a specific store. */
        op?: SegmentTypeItemEcommStore.Op | undefined;
        /** The store id to segment against. */
        value?: string | undefined;
    }

    export namespace SegmentTypeItemEcommStore {
        /** Segment by purchases from a specific store. */
        export const Field = {
            EcommStore: "ecomm_store",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Members who have or have not purchased from a specific store. */
        export const Op = {
            Is: "is",
            Not: "not",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface GoalActivity {
        condition_type: "GoalActivity";
        /** Segment by Goal activity. */
        field: SegmentTypeItemGoalActivity.Field;
        /** Whether the website URL is/not exactly, contains/doesn't contain, starts with/ends with a string. */
        op: SegmentTypeItemGoalActivity.Op;
        /** The URL to check Goal activity against. */
        value: string;
    }

    export namespace SegmentTypeItemGoalActivity {
        /** Segment by Goal activity. */
        export const Field = {
            Goal: "goal",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Whether the website URL is/not exactly, contains/doesn't contain, starts with/ends with a string. */
        export const Op = {
            Is: "is",
            GoalNot: "goal_not",
            Contains: "contains",
            GoalNotcontain: "goal_notcontain",
            Starts: "starts",
            Ends: "ends",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface GoalTimestamp {
        condition_type: "GoalTimestamp";
        /** Segment by most recent interaction with a website. */
        field: SegmentTypeItemGoalTimestamp.Field;
        /** Whether the website activity happened after, before, or at a given timestamp. */
        op: SegmentTypeItemGoalTimestamp.Op;
        /** The date to check Goal activity against. */
        value: string;
    }

    export namespace SegmentTypeItemGoalTimestamp {
        /** Segment by most recent interaction with a website. */
        export const Field = {
            GoalLastVisited: "goal_last_visited",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Whether the website activity happened after, before, or at a given timestamp. */
        export const Op = {
            Greater: "greater",
            Less: "less",
            Is: "is",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface FuzzySegment {
        condition_type: "FuzzySegment";
        /** Segment by similar subscribers. */
        field: SegmentTypeItemFuzzySegment.Field;
        /** Members who are/are not apart of a 'similar subscribers' segment. */
        op: SegmentTypeItemFuzzySegment.Op;
        value: SegmentTypeItemFuzzySegment.Value;
    }

    export namespace SegmentTypeItemFuzzySegment {
        /** Segment by similar subscribers. */
        export const Field = {
            FuzzySegment: "fuzzy_segment",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Members who are/are not apart of a 'similar subscribers' segment. */
        export const Op = {
            FuzzyIs: "fuzzy_is",
            FuzzyNot: "fuzzy_not",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
        export type Value = number | string;
    }

    export interface StaticSegment {
        condition_type: "StaticSegment";
        /** Segment by a given static segment. */
        field: SegmentTypeItemStaticSegment.Field;
        /** Members who are/are not apart of a static segment. */
        op: SegmentTypeItemStaticSegment.Op;
        value: SegmentTypeItemStaticSegment.Value;
    }

    export namespace SegmentTypeItemStaticSegment {
        /** Segment by a given static segment. */
        export const Field = {
            StaticSegment: "static_segment",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Members who are/are not apart of a static segment. */
        export const Op = {
            StaticIs: "static_is",
            StaticNot: "static_not",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
        export type Value = number | string;
    }

    export interface IpGeoCountryState {
        condition_type: "IPGeoCountryState";
        /** Segmenting subscribers who are within a specific location. */
        field: SegmentTypeItemIpGeoCountryState.Field;
        /** Segment members who are within a specific country or US state. */
        op: SegmentTypeItemIpGeoCountryState.Op;
        /** The two-letter country code or US state abbreviation. */
        value: string;
    }

    export namespace SegmentTypeItemIpGeoCountryState {
        /** Segmenting subscribers who are within a specific location. */
        export const Field = {
            Ipgeo: "ipgeo",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Segment members who are within a specific country or US state. */
        export const Op = {
            Ipgeocountry: "ipgeocountry",
            Ipgeonotcountry: "ipgeonotcountry",
            Ipgeostate: "ipgeostate",
            Ipgeonotstate: "ipgeonotstate",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface IpGeoIn {
        condition_type: "IPGeoIn";
        /** The address of the target location. */
        addr: string;
        /** Segmenting subscribers who are within a specific location. */
        field: SegmentTypeItemIpGeoIn.Field;
        /** The latitude of the target location. */
        lat: string;
        /** The longitude of the target location. */
        lng: string;
        /** Segment members who are within a specific geographic region. */
        op: SegmentTypeItemIpGeoIn.Op;
        /** The radius of the target location. */
        value: number;
    }

    export namespace SegmentTypeItemIpGeoIn {
        /** Segmenting subscribers who are within a specific location. */
        export const Field = {
            Ipgeo: "ipgeo",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Segment members who are within a specific geographic region. */
        export const Op = {
            Ipgeoin: "ipgeoin",
            Ipgeonotin: "ipgeonotin",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface IpGeoInZip {
        condition_type: "IPGeoInZip";
        /** The zip code to segment against. */
        extra: number;
        /** Segmenting subscribers who are within a specific location. */
        field: SegmentTypeItemIpGeoInZip.Field;
        /** Segment members who are within a specific US zip code. */
        op: SegmentTypeItemIpGeoInZip.Op;
        /** The radius of the target location. */
        value: number;
    }

    export namespace SegmentTypeItemIpGeoInZip {
        /** Segmenting subscribers who are within a specific location. */
        export const Field = {
            Ipgeo: "ipgeo",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Segment members who are within a specific US zip code. */
        export const Op = {
            Ipgeoinzip: "ipgeoinzip",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface IpGeoUnknown {
        condition_type: "IPGeoUnknown";
        /** Segmenting subscribers who are within a specific location. */
        field: SegmentTypeItemIpGeoUnknown.Field;
        /** Segment members for which location information is unknown. */
        op: SegmentTypeItemIpGeoUnknown.Op;
    }

    export namespace SegmentTypeItemIpGeoUnknown {
        /** Segmenting subscribers who are within a specific location. */
        export const Field = {
            Ipgeo: "ipgeo",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Segment members for which location information is unknown. */
        export const Op = {
            Ipgeounknown: "ipgeounknown",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface IpGeoZip {
        condition_type: "IPGeoZip";
        /** Segmenting subscribers who are within a specific location. */
        field: SegmentTypeItemIpGeoZip.Field;
        /** Segment members who are/are not within a specific US zip code. */
        op: SegmentTypeItemIpGeoZip.Op;
        /** The 5-digit zip code. */
        value: number;
    }

    export namespace SegmentTypeItemIpGeoZip {
        /** Segmenting subscribers who are within a specific location. */
        export const Field = {
            Ipgeo: "ipgeo",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Segment members who are/are not within a specific US zip code. */
        export const Op = {
            Ipgeoiszip: "ipgeoiszip",
            Ipgeonotzip: "ipgeonotzip",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface SocialAge {
        condition_type: "SocialAge";
        /** Segment by age ranges in Social Profiles data. */
        field: SegmentTypeItemSocialAge.Field;
        /** Members who are/not the exact criteria listed. */
        op: SegmentTypeItemSocialAge.Op;
        /** The age range to segment. */
        value: SegmentTypeItemSocialAge.Value;
    }

    export namespace SegmentTypeItemSocialAge {
        /** Segment by age ranges in Social Profiles data. */
        export const Field = {
            SocialAge: "social_age",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Members who are/not the exact criteria listed. */
        export const Op = {
            Is: "is",
            Not: "not",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
        /** The age range to segment. */
        export const Value = {
            Eighteen24: "18-24",
            TwentyFive34: "25-34",
            ThirtyFive54: "35-54",
            FiftyFive: "55+",
        } as const;
        export type Value = (typeof Value)[keyof typeof Value];
    }

    export interface SocialGender {
        condition_type: "SocialGender";
        /** Segment by listed gender in Social Profiles data. */
        field: SegmentTypeItemSocialGender.Field;
        /** Members who are/not the exact criteria listed. */
        op: SegmentTypeItemSocialGender.Op;
        /** The Social Profiles gender to segment. */
        value: SegmentTypeItemSocialGender.Value;
    }

    export namespace SegmentTypeItemSocialGender {
        /** Segment by listed gender in Social Profiles data. */
        export const Field = {
            SocialGender: "social_gender",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Members who are/not the exact criteria listed. */
        export const Op = {
            Is: "is",
            Not: "not",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
        /** The Social Profiles gender to segment. */
        export const Value = {
            Male: "male",
            Female: "female",
        } as const;
        export type Value = (typeof Value)[keyof typeof Value];
    }

    export interface SocialInfluence {
        condition_type: "SocialInfluence";
        /** Segment by influence rating in Social Profiles data. */
        field: SegmentTypeItemSocialInfluence.Field;
        /** Members who have a rating that is/not or greater/less than the rating provided. */
        op: SegmentTypeItemSocialInfluence.Op;
        /** The Social Profiles influence rating to segment. */
        value: number;
    }

    export namespace SegmentTypeItemSocialInfluence {
        /** Segment by influence rating in Social Profiles data. */
        export const Field = {
            SocialInfluence: "social_influence",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Members who have a rating that is/not or greater/less than the rating provided. */
        export const Op = {
            Is: "is",
            Not: "not",
            Greater: "greater",
            Less: "less",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface SocialNetworkMember {
        condition_type: "SocialNetworkMember";
        /** Segment by social network in Social Profiles data. */
        field: SegmentTypeItemSocialNetworkMember.Field;
        /** Members who are/not on a given social network. */
        op: SegmentTypeItemSocialNetworkMember.Op;
        /** The social network to segment against. */
        value: SegmentTypeItemSocialNetworkMember.Value;
    }

    export namespace SegmentTypeItemSocialNetworkMember {
        /** Segment by social network in Social Profiles data. */
        export const Field = {
            SocialNetwork: "social_network",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Members who are/not on a given social network. */
        export const Op = {
            Member: "member",
            Notmember: "notmember",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
        /** The social network to segment against. */
        export const Value = {
            Twitter: "twitter",
            Facebook: "facebook",
            Linkedin: "linkedin",
            Flickr: "flickr",
            Foursquare: "foursquare",
            Lastfm: "lastfm",
            Myspace: "myspace",
            Quora: "quora",
            Vimeo: "vimeo",
            Yelp: "yelp",
            Youtube: "youtube",
        } as const;
        export type Value = (typeof Value)[keyof typeof Value];
    }

    export interface SocialNetworkFollow {
        condition_type: "SocialNetworkFollow";
        /** Segment by social network in Social Profiles data. */
        field: SegmentTypeItemSocialNetworkFollow.Field;
        /** Members who are/not following a linked account on a given social network. */
        op: SegmentTypeItemSocialNetworkFollow.Op;
        /** The social network to segment against. */
        value: SegmentTypeItemSocialNetworkFollow.Value;
    }

    export namespace SegmentTypeItemSocialNetworkFollow {
        /** Segment by social network in Social Profiles data. */
        export const Field = {
            SocialNetwork: "social_network",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Members who are/not following a linked account on a given social network. */
        export const Op = {
            Follow: "follow",
            Notfollow: "notfollow",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
        /** The social network to segment against. */
        export const Value = {
            TwitterFollow: "twitter_follow",
        } as const;
        export type Value = (typeof Value)[keyof typeof Value];
    }

    export interface AddressMerge {
        condition_type: "AddressMerge";
        /** An address-type merge field to segment. */
        field: string;
        /** Whether the member's address merge field contains/does not contain a value or is/is not blank. */
        op: SegmentTypeItemAddressMerge.Op;
        /** The value to segment a text merge field with. */
        value?: string | undefined;
    }

    export namespace SegmentTypeItemAddressMerge {
        /** Whether the member's address merge field contains/does not contain a value or is/is not blank. */
        export const Op = {
            Contains: "contains",
            Notcontain: "notcontain",
            Blank: "blank",
            BlankNot: "blank_not",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface ZipMerge {
        condition_type: "ZipMerge";
        /** The city or the zip being used to segment against. */
        extra: string;
        /** An address or zip-type merge field to segment. */
        field: string;
        /** Whether the member's address merge field is within a given distance from a city or zip. */
        op: SegmentTypeItemZipMerge.Op;
        /** The distance from the city/zip. */
        value: string;
    }

    export namespace SegmentTypeItemZipMerge {
        /** Whether the member's address merge field is within a given distance from a city or zip. */
        export const Op = {
            Geoin: "geoin",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface BirthdayMerge {
        condition_type: "BirthdayMerge";
        /** A date merge field to segment. */
        field: string;
        /** Whether the member's birthday merge information is/is not a certain date or is/is not blank. */
        op: SegmentTypeItemBirthdayMerge.Op;
        /** A date to segment against (mm/dd). */
        value?: string | undefined;
    }

    export namespace SegmentTypeItemBirthdayMerge {
        /** Whether the member's birthday merge information is/is not a certain date or is/is not blank. */
        export const Op = {
            Is: "is",
            Not: "not",
            Blank: "blank",
            BlankNot: "blank_not",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface DateMerge {
        condition_type: "DateMerge";
        /** A date merge field to segment. */
        field: string;
        /** Whether the member's merge information is/is not, is greater/less than a value or is/is not blank. */
        op: SegmentTypeItemDateMerge.Op;
        /** A date to segment against. */
        value?: string | undefined;
    }

    export namespace SegmentTypeItemDateMerge {
        /** Whether the member's merge information is/is not, is greater/less than a value or is/is not blank. */
        export const Op = {
            Is: "is",
            Not: "not",
            Less: "less",
            Blank: "blank",
            BlankNot: "blank_not",
            Greater: "greater",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface SelectMerge {
        condition_type: "SelectMerge";
        /** A merge field to segment. */
        field: string;
        /** Whether the member's merge information is/is not a value or is/is not blank. */
        op: SegmentTypeItemSelectMerge.Op;
        /** The value to segment a text merge field with. */
        value?: string | undefined;
    }

    export namespace SegmentTypeItemSelectMerge {
        /** Whether the member's merge information is/is not a value or is/is not blank. */
        export const Op = {
            Is: "is",
            Not: "not",
            Blank: "blank",
            BlankNot: "blank_not",
            Notcontain: "notcontain",
            Contains: "contains",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface TextMerge {
        condition_type: "TextMerge";
        /** A text or number merge field to segment. */
        field: string;
        /** Whether the member's merge information is/is not, contains/does not contain, starts/ends with, or is greater/less than a value */
        op: SegmentTypeItemTextMerge.Op;
        /** The value to segment a text or number merge field with. */
        value?: string | undefined;
    }

    export namespace SegmentTypeItemTextMerge {
        /** Whether the member's merge information is/is not, contains/does not contain, starts/ends with, or is greater/less than a value */
        export const Op = {
            Is: "is",
            Not: "not",
            Contains: "contains",
            Notcontain: "notcontain",
            Starts: "starts",
            Ends: "ends",
            Greater: "greater",
            Less: "less",
            Blank: "blank",
            BlankNot: "blank_not",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface EmailAddress {
        condition_type: "EmailAddress";
        /** Segmenting based off of a subscriber's email address. */
        field: SegmentTypeItemEmailAddress.Field;
        /** Whether the email address is/not exactly, contains/doesn't contain, starts/ends with a string. */
        op: SegmentTypeItemEmailAddress.Op;
        /** The value to compare the email against. */
        value?: string | undefined;
    }

    export namespace SegmentTypeItemEmailAddress {
        /** Segmenting based off of a subscriber's email address. */
        export const Field = {
            Merge0: "merge0",
            Email: "EMAIL",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Whether the email address is/not exactly, contains/doesn't contain, starts/ends with a string. */
        export const Op = {
            Is: "is",
            Not: "not",
            Contains: "contains",
            Notcontain: "notcontain",
            Starts: "starts",
            Ends: "ends",
            Greater: "greater",
            Less: "less",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }

    export interface PredictedGender {
        condition_type: "PredictedGender";
        /** Segment by predicted gender. */
        field: SegmentTypeItemPredictedGender.Field;
        /** Members who are/not the exact criteria listed. */
        op: SegmentTypeItemPredictedGender.Op;
        /** The predicted gender to segment. */
        value: SegmentTypeItemPredictedGender.Value;
    }

    export namespace SegmentTypeItemPredictedGender {
        /** Segment by predicted gender. */
        export const Field = {
            PredictedGender: "predicted_gender",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Members who are/not the exact criteria listed. */
        export const Op = {
            Is: "is",
            Not: "not",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
        /** The predicted gender to segment. */
        export const Value = {
            Male: "male",
            Female: "female",
        } as const;
        export type Value = (typeof Value)[keyof typeof Value];
    }

    export interface PredictedAge {
        condition_type: "PredictedAge";
        /** Segment by predicted age. */
        field: SegmentTypeItemPredictedAge.Field;
        /** Members who are/not the exact criteria listed. */
        op: SegmentTypeItemPredictedAge.Op;
        /** The predicted age to segment. */
        value: SegmentTypeItemPredictedAge.Value;
    }

    export namespace SegmentTypeItemPredictedAge {
        /** Segment by predicted age. */
        export const Field = {
            PredictedAgeRange: "predicted_age_range",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Members who are/not the exact criteria listed. */
        export const Op = {
            Is: "is",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
        /** The predicted age to segment. */
        export const Value = {
            Eighteen24: "18-24",
            TwentyFive34: "25-34",
            ThirtyFive44: "35-44",
            FortyFive54: "45-54",
            FiftyFive64: "55-64",
            SixtyFive: "65+",
        } as const;
        export type Value = (typeof Value)[keyof typeof Value];
    }

    export interface NewSubscribers {
        condition_type: "NewSubscribers";
        /** Segment by when people subscribed. */
        field?: SegmentTypeItemNewSubscribers.Field | undefined;
        /** Whe the event took place, namely within a time frame. */
        op?: SegmentTypeItemNewSubscribers.Op | undefined;
        /** What type of data to segment on: a specific date, a specific campaign, or the last campaign sent. */
        value?: string | undefined;
    }

    export namespace SegmentTypeItemNewSubscribers {
        /** Segment by when people subscribed. */
        export const Field = {
            TimestampOpt: "timestamp_opt",
        } as const;
        export type Field = (typeof Field)[keyof typeof Field];
        /** Whe the event took place, namely within a time frame. */
        export const Op = {
            DateWithin: "date_within",
        } as const;
        export type Op = (typeof Op)[keyof typeof Op];
    }
}
