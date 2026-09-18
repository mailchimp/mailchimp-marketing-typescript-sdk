//  This file was auto-generated from our API Definition.

import type * as Mailchimp from "../../api/index.js";
import * as core from "../../core/index.js";
import type * as serializers from "../index.js";
import { SegmentTypeItemAddressMerge } from "./SegmentTypeItemAddressMerge.js";
import { SegmentTypeItemAim } from "./SegmentTypeItemAim.js";
import { SegmentTypeItemAutomation } from "./SegmentTypeItemAutomation.js";
import { SegmentTypeItemBirthdayMerge } from "./SegmentTypeItemBirthdayMerge.js";
import { SegmentTypeItemCampaignPoll } from "./SegmentTypeItemCampaignPoll.js";
import { SegmentTypeItemConversation } from "./SegmentTypeItemConversation.js";
import { SegmentTypeItemDate } from "./SegmentTypeItemDate.js";
import { SegmentTypeItemDateMerge } from "./SegmentTypeItemDateMerge.js";
import { SegmentTypeItemEcommCategory } from "./SegmentTypeItemEcommCategory.js";
import { SegmentTypeItemEcommNumber } from "./SegmentTypeItemEcommNumber.js";
import { SegmentTypeItemEcommPurchased } from "./SegmentTypeItemEcommPurchased.js";
import { SegmentTypeItemEcommSpent } from "./SegmentTypeItemEcommSpent.js";
import { SegmentTypeItemEcommStore } from "./SegmentTypeItemEcommStore.js";
import { SegmentTypeItemEmailAddress } from "./SegmentTypeItemEmailAddress.js";
import { SegmentTypeItemEmailClient } from "./SegmentTypeItemEmailClient.js";
import { SegmentTypeItemFuzzySegment } from "./SegmentTypeItemFuzzySegment.js";
import { SegmentTypeItemGoalActivity } from "./SegmentTypeItemGoalActivity.js";
import { SegmentTypeItemGoalTimestamp } from "./SegmentTypeItemGoalTimestamp.js";
import { SegmentTypeItemInterests } from "./SegmentTypeItemInterests.js";
import { SegmentTypeItemIpGeoCountryState } from "./SegmentTypeItemIpGeoCountryState.js";
import { SegmentTypeItemIpGeoIn } from "./SegmentTypeItemIpGeoIn.js";
import { SegmentTypeItemIpGeoInZip } from "./SegmentTypeItemIpGeoInZip.js";
import { SegmentTypeItemIpGeoUnknown } from "./SegmentTypeItemIpGeoUnknown.js";
import { SegmentTypeItemIpGeoZip } from "./SegmentTypeItemIpGeoZip.js";
import { SegmentTypeItemLanguage } from "./SegmentTypeItemLanguage.js";
import { SegmentTypeItemMemberRating } from "./SegmentTypeItemMemberRating.js";
import { SegmentTypeItemNewSubscribers } from "./SegmentTypeItemNewSubscribers.js";
import { SegmentTypeItemPredictedAge } from "./SegmentTypeItemPredictedAge.js";
import { SegmentTypeItemPredictedGender } from "./SegmentTypeItemPredictedGender.js";
import { SegmentTypeItemSelectMerge } from "./SegmentTypeItemSelectMerge.js";
import { SegmentTypeItemSignupSource } from "./SegmentTypeItemSignupSource.js";
import { SegmentTypeItemSocialAge } from "./SegmentTypeItemSocialAge.js";
import { SegmentTypeItemSocialGender } from "./SegmentTypeItemSocialGender.js";
import { SegmentTypeItemSocialInfluence } from "./SegmentTypeItemSocialInfluence.js";
import { SegmentTypeItemSocialNetworkFollow } from "./SegmentTypeItemSocialNetworkFollow.js";
import { SegmentTypeItemSocialNetworkMember } from "./SegmentTypeItemSocialNetworkMember.js";
import { SegmentTypeItemStaticSegment } from "./SegmentTypeItemStaticSegment.js";
import { SegmentTypeItemSurveyMonkey } from "./SegmentTypeItemSurveyMonkey.js";
import { SegmentTypeItemTextMerge } from "./SegmentTypeItemTextMerge.js";
import { SegmentTypeItemVip } from "./SegmentTypeItemVip.js";
import { SegmentTypeItemZipMerge } from "./SegmentTypeItemZipMerge.js";

export const SegmentTypeItem: core.serialization.Schema<serializers.SegmentTypeItem.Raw, Mailchimp.SegmentTypeItem> =
    core.serialization
        .union(core.serialization.discriminant("conditionType", "condition_type"), {
            Aim: SegmentTypeItemAim,
            Automation: SegmentTypeItemAutomation,
            CampaignPoll: SegmentTypeItemCampaignPoll,
            Conversation: SegmentTypeItemConversation,
            Date: SegmentTypeItemDate,
            EmailClient: SegmentTypeItemEmailClient,
            Language: SegmentTypeItemLanguage,
            MemberRating: SegmentTypeItemMemberRating,
            SignupSource: SegmentTypeItemSignupSource,
            SurveyMonkey: SegmentTypeItemSurveyMonkey,
            VIP: SegmentTypeItemVip,
            Interests: SegmentTypeItemInterests,
            EcommCategory: SegmentTypeItemEcommCategory,
            EcommNumber: SegmentTypeItemEcommNumber,
            EcommPurchased: SegmentTypeItemEcommPurchased,
            EcommSpent: SegmentTypeItemEcommSpent,
            EcommStore: SegmentTypeItemEcommStore,
            GoalActivity: SegmentTypeItemGoalActivity,
            GoalTimestamp: SegmentTypeItemGoalTimestamp,
            FuzzySegment: SegmentTypeItemFuzzySegment,
            StaticSegment: SegmentTypeItemStaticSegment,
            IPGeoCountryState: SegmentTypeItemIpGeoCountryState,
            IPGeoIn: SegmentTypeItemIpGeoIn,
            IPGeoInZip: SegmentTypeItemIpGeoInZip,
            IPGeoUnknown: SegmentTypeItemIpGeoUnknown,
            IPGeoZip: SegmentTypeItemIpGeoZip,
            SocialAge: SegmentTypeItemSocialAge,
            SocialGender: SegmentTypeItemSocialGender,
            SocialInfluence: SegmentTypeItemSocialInfluence,
            SocialNetworkMember: SegmentTypeItemSocialNetworkMember,
            SocialNetworkFollow: SegmentTypeItemSocialNetworkFollow,
            AddressMerge: SegmentTypeItemAddressMerge,
            ZipMerge: SegmentTypeItemZipMerge,
            BirthdayMerge: SegmentTypeItemBirthdayMerge,
            DateMerge: SegmentTypeItemDateMerge,
            SelectMerge: SegmentTypeItemSelectMerge,
            TextMerge: SegmentTypeItemTextMerge,
            EmailAddress: SegmentTypeItemEmailAddress,
            PredictedGender: SegmentTypeItemPredictedGender,
            PredictedAge: SegmentTypeItemPredictedAge,
            NewSubscribers: SegmentTypeItemNewSubscribers,
        })
        .transform<Mailchimp.SegmentTypeItem>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace SegmentTypeItem {
    export type Raw =
        | SegmentTypeItem.Aim
        | SegmentTypeItem.Automation
        | SegmentTypeItem.CampaignPoll
        | SegmentTypeItem.Conversation
        | SegmentTypeItem.Date
        | SegmentTypeItem.EmailClient
        | SegmentTypeItem.Language
        | SegmentTypeItem.MemberRating
        | SegmentTypeItem.SignupSource
        | SegmentTypeItem.SurveyMonkey
        | SegmentTypeItem.Vip
        | SegmentTypeItem.Interests
        | SegmentTypeItem.EcommCategory
        | SegmentTypeItem.EcommNumber
        | SegmentTypeItem.EcommPurchased
        | SegmentTypeItem.EcommSpent
        | SegmentTypeItem.EcommStore
        | SegmentTypeItem.GoalActivity
        | SegmentTypeItem.GoalTimestamp
        | SegmentTypeItem.FuzzySegment
        | SegmentTypeItem.StaticSegment
        | SegmentTypeItem.IpGeoCountryState
        | SegmentTypeItem.IpGeoIn
        | SegmentTypeItem.IpGeoInZip
        | SegmentTypeItem.IpGeoUnknown
        | SegmentTypeItem.IpGeoZip
        | SegmentTypeItem.SocialAge
        | SegmentTypeItem.SocialGender
        | SegmentTypeItem.SocialInfluence
        | SegmentTypeItem.SocialNetworkMember
        | SegmentTypeItem.SocialNetworkFollow
        | SegmentTypeItem.AddressMerge
        | SegmentTypeItem.ZipMerge
        | SegmentTypeItem.BirthdayMerge
        | SegmentTypeItem.DateMerge
        | SegmentTypeItem.SelectMerge
        | SegmentTypeItem.TextMerge
        | SegmentTypeItem.EmailAddress
        | SegmentTypeItem.PredictedGender
        | SegmentTypeItem.PredictedAge
        | SegmentTypeItem.NewSubscribers;

    export interface Aim extends SegmentTypeItemAim.Raw {
        condition_type: "Aim";
    }

    export interface Automation extends SegmentTypeItemAutomation.Raw {
        condition_type: "Automation";
    }

    export interface CampaignPoll extends SegmentTypeItemCampaignPoll.Raw {
        condition_type: "CampaignPoll";
    }

    export interface Conversation extends SegmentTypeItemConversation.Raw {
        condition_type: "Conversation";
    }

    export interface Date extends SegmentTypeItemDate.Raw {
        condition_type: "Date";
    }

    export interface EmailClient extends SegmentTypeItemEmailClient.Raw {
        condition_type: "EmailClient";
    }

    export interface Language extends SegmentTypeItemLanguage.Raw {
        condition_type: "Language";
    }

    export interface MemberRating extends SegmentTypeItemMemberRating.Raw {
        condition_type: "MemberRating";
    }

    export interface SignupSource extends SegmentTypeItemSignupSource.Raw {
        condition_type: "SignupSource";
    }

    export interface SurveyMonkey extends SegmentTypeItemSurveyMonkey.Raw {
        condition_type: "SurveyMonkey";
    }

    export interface Vip extends SegmentTypeItemVip.Raw {
        condition_type: "VIP";
    }

    export interface Interests extends SegmentTypeItemInterests.Raw {
        condition_type: "Interests";
    }

    export interface EcommCategory extends SegmentTypeItemEcommCategory.Raw {
        condition_type: "EcommCategory";
    }

    export interface EcommNumber extends SegmentTypeItemEcommNumber.Raw {
        condition_type: "EcommNumber";
    }

    export interface EcommPurchased extends SegmentTypeItemEcommPurchased.Raw {
        condition_type: "EcommPurchased";
    }

    export interface EcommSpent extends SegmentTypeItemEcommSpent.Raw {
        condition_type: "EcommSpent";
    }

    export interface EcommStore extends SegmentTypeItemEcommStore.Raw {
        condition_type: "EcommStore";
    }

    export interface GoalActivity extends SegmentTypeItemGoalActivity.Raw {
        condition_type: "GoalActivity";
    }

    export interface GoalTimestamp extends SegmentTypeItemGoalTimestamp.Raw {
        condition_type: "GoalTimestamp";
    }

    export interface FuzzySegment extends SegmentTypeItemFuzzySegment.Raw {
        condition_type: "FuzzySegment";
    }

    export interface StaticSegment extends SegmentTypeItemStaticSegment.Raw {
        condition_type: "StaticSegment";
    }

    export interface IpGeoCountryState extends SegmentTypeItemIpGeoCountryState.Raw {
        condition_type: "IPGeoCountryState";
    }

    export interface IpGeoIn extends SegmentTypeItemIpGeoIn.Raw {
        condition_type: "IPGeoIn";
    }

    export interface IpGeoInZip extends SegmentTypeItemIpGeoInZip.Raw {
        condition_type: "IPGeoInZip";
    }

    export interface IpGeoUnknown extends SegmentTypeItemIpGeoUnknown.Raw {
        condition_type: "IPGeoUnknown";
    }

    export interface IpGeoZip extends SegmentTypeItemIpGeoZip.Raw {
        condition_type: "IPGeoZip";
    }

    export interface SocialAge extends SegmentTypeItemSocialAge.Raw {
        condition_type: "SocialAge";
    }

    export interface SocialGender extends SegmentTypeItemSocialGender.Raw {
        condition_type: "SocialGender";
    }

    export interface SocialInfluence extends SegmentTypeItemSocialInfluence.Raw {
        condition_type: "SocialInfluence";
    }

    export interface SocialNetworkMember extends SegmentTypeItemSocialNetworkMember.Raw {
        condition_type: "SocialNetworkMember";
    }

    export interface SocialNetworkFollow extends SegmentTypeItemSocialNetworkFollow.Raw {
        condition_type: "SocialNetworkFollow";
    }

    export interface AddressMerge extends SegmentTypeItemAddressMerge.Raw {
        condition_type: "AddressMerge";
    }

    export interface ZipMerge extends SegmentTypeItemZipMerge.Raw {
        condition_type: "ZipMerge";
    }

    export interface BirthdayMerge extends SegmentTypeItemBirthdayMerge.Raw {
        condition_type: "BirthdayMerge";
    }

    export interface DateMerge extends SegmentTypeItemDateMerge.Raw {
        condition_type: "DateMerge";
    }

    export interface SelectMerge extends SegmentTypeItemSelectMerge.Raw {
        condition_type: "SelectMerge";
    }

    export interface TextMerge extends SegmentTypeItemTextMerge.Raw {
        condition_type: "TextMerge";
    }

    export interface EmailAddress extends SegmentTypeItemEmailAddress.Raw {
        condition_type: "EmailAddress";
    }

    export interface PredictedGender extends SegmentTypeItemPredictedGender.Raw {
        condition_type: "PredictedGender";
    }

    export interface PredictedAge extends SegmentTypeItemPredictedAge.Raw {
        condition_type: "PredictedAge";
    }

    export interface NewSubscribers extends SegmentTypeItemNewSubscribers.Raw {
        condition_type: "NewSubscribers";
    }
}
