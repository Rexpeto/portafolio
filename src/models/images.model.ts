export interface Images {
  data: ImagesData;
}

export interface ImagesData {
  id: number;
  attributes: ImagesAttributes;
}

export interface ImagesAttributes {
  name: string;
  alternativeText: string;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: ProviderMetadata5;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  large: Large;
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata2;
}

export interface ProviderMetadata2 {
  public_id: string;
  resource_type: string;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata3;
}

export interface ProviderMetadata3 {
  public_id: string;
  resource_type: string;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata4;
}

export interface ProviderMetadata4 {
  public_id: string;
  resource_type: string;
}

export interface ProviderMetadata5 {
  public_id: string;
  resource_type: string;
}
