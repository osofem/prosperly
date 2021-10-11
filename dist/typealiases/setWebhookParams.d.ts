export declare type SetWebhookParams = {
    url: string;
    certificate?: string[];
    ip_address?: string;
    max_connections?: number;
    allowed_updates?: string[];
    drop_pending_updates?: boolean;
};
