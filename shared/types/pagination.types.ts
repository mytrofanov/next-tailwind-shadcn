export type PaginationParams = {
    limit: number;
    offset: number;
};

export interface PaginationMetadata {
    total: number;
    page: number;
    totalPages: number;
}
