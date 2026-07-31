export interface OfficeLocation {
  readonly name: string;
  readonly address: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly googleMapsUrl: string;
}

export const officeLocation: OfficeLocation = {
  name: "PT Falah Inovasi Teknologi",
  address:
    "Jl. Mampang Prapatan XII No.1 RT.8/RW.1, Tegal Parang, Kec. Mampang Prapatan, Kota Jakarta Selatan, DKI Jakarta 12790",
  latitude: -6.24887,
  longitude: 106.82642,
  googleMapsUrl: "https://maps.google.com/?q=PT+Falah+Inovasi+Teknologi",
};
