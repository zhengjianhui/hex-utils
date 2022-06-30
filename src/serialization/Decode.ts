export interface Decode {
  readUInt(hex: string): number;
  readUInt16BE(hex: string): number;
  readUInt32BE(hex: string): number;
  readUInt64BE(hex: string): bigint;
  readUInt16LE(hex: string): number;
  readUInt32LE(hex: string): number;
  readUInt64LE(hex: string): bigint;
  readStr(hex: string): string;
}
