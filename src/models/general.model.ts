export interface Meta {
  pagination: Pagination;
}

export interface EmptyMeta {}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
