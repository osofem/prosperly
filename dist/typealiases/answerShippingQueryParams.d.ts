import { LabeledPrice } from "./sendInvoiceParams";
export declare type AnswerShippingQueryParams = {
    shipping_query_id: string;
    ok: boolean;
    shipping_options?: ShippingOption[];
    error_message?: string;
};
export declare type ShippingOption = {
    id: string;
    title: string;
    prices: LabeledPrice[];
};
