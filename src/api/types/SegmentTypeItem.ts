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
    export interface Aim extends Mailchimp.SegmentTypeItemAim {
        conditionType: "Aim";
    }

    export interface Automation extends Mailchimp.SegmentTypeItemAutomation {
        conditionType: "Automation";
    }

    export interface CampaignPoll extends Mailchimp.SegmentTypeItemCampaignPoll {
        conditionType: "CampaignPoll";
    }

    export interface Conversation extends Mailchimp.SegmentTypeItemConversation {
        conditionType: "Conversation";
    }

    export interface Date extends Mailchimp.SegmentTypeItemDate {
        conditionType: "Date";
    }

    export interface EmailClient extends Mailchimp.SegmentTypeItemEmailClient {
        conditionType: "EmailClient";
    }

    export interface Language extends Mailchimp.SegmentTypeItemLanguage {
        conditionType: "Language";
    }

    export interface MemberRating extends Mailchimp.SegmentTypeItemMemberRating {
        conditionType: "MemberRating";
    }

    export interface SignupSource extends Mailchimp.SegmentTypeItemSignupSource {
        conditionType: "SignupSource";
    }

    export interface SurveyMonkey extends Mailchimp.SegmentTypeItemSurveyMonkey {
        conditionType: "SurveyMonkey";
    }

    export interface Vip extends Mailchimp.SegmentTypeItemVip {
        conditionType: "VIP";
    }

    export interface Interests extends Mailchimp.SegmentTypeItemInterests {
        conditionType: "Interests";
    }

    export interface EcommCategory extends Mailchimp.SegmentTypeItemEcommCategory {
        conditionType: "EcommCategory";
    }

    export interface EcommNumber extends Mailchimp.SegmentTypeItemEcommNumber {
        conditionType: "EcommNumber";
    }

    export interface EcommPurchased extends Mailchimp.SegmentTypeItemEcommPurchased {
        conditionType: "EcommPurchased";
    }

    export interface EcommSpent extends Mailchimp.SegmentTypeItemEcommSpent {
        conditionType: "EcommSpent";
    }

    export interface EcommStore extends Mailchimp.SegmentTypeItemEcommStore {
        conditionType: "EcommStore";
    }

    export interface GoalActivity extends Mailchimp.SegmentTypeItemGoalActivity {
        conditionType: "GoalActivity";
    }

    export interface GoalTimestamp extends Mailchimp.SegmentTypeItemGoalTimestamp {
        conditionType: "GoalTimestamp";
    }

    export interface FuzzySegment extends Mailchimp.SegmentTypeItemFuzzySegment {
        conditionType: "FuzzySegment";
    }

    export interface StaticSegment extends Mailchimp.SegmentTypeItemStaticSegment {
        conditionType: "StaticSegment";
    }

    export interface IpGeoCountryState extends Mailchimp.SegmentTypeItemIpGeoCountryState {
        conditionType: "IPGeoCountryState";
    }

    export interface IpGeoIn extends Mailchimp.SegmentTypeItemIpGeoIn {
        conditionType: "IPGeoIn";
    }

    export interface IpGeoInZip extends Mailchimp.SegmentTypeItemIpGeoInZip {
        conditionType: "IPGeoInZip";
    }

    export interface IpGeoUnknown extends Mailchimp.SegmentTypeItemIpGeoUnknown {
        conditionType: "IPGeoUnknown";
    }

    export interface IpGeoZip extends Mailchimp.SegmentTypeItemIpGeoZip {
        conditionType: "IPGeoZip";
    }

    export interface SocialAge extends Mailchimp.SegmentTypeItemSocialAge {
        conditionType: "SocialAge";
    }

    export interface SocialGender extends Mailchimp.SegmentTypeItemSocialGender {
        conditionType: "SocialGender";
    }

    export interface SocialInfluence extends Mailchimp.SegmentTypeItemSocialInfluence {
        conditionType: "SocialInfluence";
    }

    export interface SocialNetworkMember extends Mailchimp.SegmentTypeItemSocialNetworkMember {
        conditionType: "SocialNetworkMember";
    }

    export interface SocialNetworkFollow extends Mailchimp.SegmentTypeItemSocialNetworkFollow {
        conditionType: "SocialNetworkFollow";
    }

    export interface AddressMerge extends Mailchimp.SegmentTypeItemAddressMerge {
        conditionType: "AddressMerge";
    }

    export interface ZipMerge extends Mailchimp.SegmentTypeItemZipMerge {
        conditionType: "ZipMerge";
    }

    export interface BirthdayMerge extends Mailchimp.SegmentTypeItemBirthdayMerge {
        conditionType: "BirthdayMerge";
    }

    export interface DateMerge extends Mailchimp.SegmentTypeItemDateMerge {
        conditionType: "DateMerge";
    }

    export interface SelectMerge extends Mailchimp.SegmentTypeItemSelectMerge {
        conditionType: "SelectMerge";
    }

    export interface TextMerge extends Mailchimp.SegmentTypeItemTextMerge {
        conditionType: "TextMerge";
    }

    export interface EmailAddress extends Mailchimp.SegmentTypeItemEmailAddress {
        conditionType: "EmailAddress";
    }

    export interface PredictedGender extends Mailchimp.SegmentTypeItemPredictedGender {
        conditionType: "PredictedGender";
    }

    export interface PredictedAge extends Mailchimp.SegmentTypeItemPredictedAge {
        conditionType: "PredictedAge";
    }

    export interface NewSubscribers extends Mailchimp.SegmentTypeItemNewSubscribers {
        conditionType: "NewSubscribers";
    }
}
