export class MNFTCell {
  version: number;
  characteristic: number[];
  configure: number;
  state: number;
  // optional
  // extinfo_data: <size:uint16> + <vartext>;

  IssuerID_byte20: string;
  class_id: number;
  TokenID: number;
}
