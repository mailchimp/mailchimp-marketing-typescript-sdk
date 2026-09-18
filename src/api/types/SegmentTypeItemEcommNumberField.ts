//  This file was auto-generated from our API Definition.

/** Segment by average spent total, number of orders, total number of products purchased, or average number of products per order. */
export const SegmentTypeItemEcommNumberField = {
    EcommSpentAvg: "ecomm_spent_avg",
    EcommOrders: "ecomm_orders",
    EcommProdAll: "ecomm_prod_all",
    EcommAvgOrd: "ecomm_avg_ord",
} as const;
export type SegmentTypeItemEcommNumberField =
    (typeof SegmentTypeItemEcommNumberField)[keyof typeof SegmentTypeItemEcommNumberField];
