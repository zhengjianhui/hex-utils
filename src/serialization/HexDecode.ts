import { Decode } from './Decode';

export class HexDecode implements Decode {
  readUInt(hex: string): number {
    const buf: Buffer = Buffer.from(hex, 'hex');
    return buf.readUInt8();
  }

  readUInt16BE(hex: string): number {
    const buf: Buffer = Buffer.from(hex, 'hex');
    return buf.readUInt16BE();
  }

  readUInt32BE(hex: string): number {
    const buf: Buffer = Buffer.from(hex, 'hex');
    return buf.readUInt32BE();
  }

  readUInt64BE(hex: string): bigint {
    const buf: Buffer = Buffer.from(hex, 'hex');
    return buf.readBigUInt64BE();
  }

  readUInt16LE(hex: string): number {
    const buf: Buffer = Buffer.from(hex, 'hex');
    return buf.readUInt16LE();
  }

  readUInt32LE(hex: string): number {
    const buf: Buffer = Buffer.from(hex, 'hex');
    return buf.readUInt32LE();
  }

  readUInt64LE(hex: string): bigint {
    const buf: Buffer = Buffer.from(hex, 'hex');
    return buf.readBigUInt64LE();
  }

  readStr(hex: string): string {
    const buf: Buffer = Buffer.from(hex, 'hex');
    return buf.toString('utf-8');
  }
}
