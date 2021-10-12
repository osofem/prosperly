export type SetWebhookParams = {
    url: string;
    certificate?: string; //path to the certificate file 
    ip_address?: string;
    max_connections?: number;
    allowed_updates?: string[];
    drop_pending_updates?: boolean;
};