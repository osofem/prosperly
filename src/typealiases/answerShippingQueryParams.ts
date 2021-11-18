import { LabeledPrice } from "./sendInvoiceParams"

export type AnswerShippingQueryParams = {
    shipping_query_id: string //Unique identifier for the query to be answered
    ok: boolean //Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
    shipping_options?: ShippingOption[] //Required if ok is True. A JSON-serialized array of available shipping options.
    error_message?: string //Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user.
}


//This object represents one shipping option.
export type ShippingOption = {
    id: string //Shipping option identifier
    title: string //title
    prices: LabeledPrice[] //List of price portions  
}