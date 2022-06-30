export class MNFTClass {
  version: number;
  total: number;
  issued: number;
  configure: number;
  name_size: number;
  name: string;
  description_size: number;
  description: string;
  renderer_size: number;
  renderer: string;
  // optional data array
  // extinfo_data: <size:uint16> + <vartext>
  // extinfo_data: <size:uint16> + <vartext>

  IssuerID_byte20: string;
  class_id: number;
  type_hash: string;
}
