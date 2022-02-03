export interface ShoutOutsResponse {
    data: Shoutouts[];
}
export interface Shoutouts {
    id: number;
    to: string;
    from: string;
    message: string;
}