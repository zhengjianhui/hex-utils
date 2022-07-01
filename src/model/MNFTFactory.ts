import { MNFTIssuer } from './MNFTIssuer';
import { HexDecode } from '../serialization/HexDecode';
import * as ckbUtils from '@nervosnetwork/ckb-sdk-utils';
import { MNFTClass } from './MNFTClass';
import { MNFTCell } from './MNFTCell';
import { log } from 'util';

export class MNFTFactory {
  static getMNFTIssuer(): MNFTIssuer {
    // link https://explorer.nervos.org/transaction/0x821162575c5c9ecc2222d3c7cdaf4cfc501aa4a5c500777b9e8c0b802cfd2b86 input#0
    const cellData =
      '00000000010000000000e17b226e616d65223a224e657276696e61204c616273222c22776569626f223a2268747470733a2f2f7777772e6e657276696e612e696f222c22656d61696c223a22636f6e74616374406e657276696e612e696f222c22696d616765223a2268747470733a2f2f692e6c6f6c692e6e65742f323032312f30342f32392f49696762704f57503866773971446e2e706e67222c2277656273697465223a2268747470733a2f2f7777772e6e657276696e612e696f222c226465736372697074696f6e223a224d656c74696e672054776f20576f726c647320546f6765746865722e227d';
    const type: CKBComponents.Script = {
      codeHash: '0x24b04faf80ded836efc05247778eec4ec02548dab6e2012c0107374aa3f68b81',
      hashType: 'type',
      args: '0x11ff2e88bc2c559c7bf21eff9b0b00f00c8e86ad',
    };

    const decode = new HexDecode();

    const issuer = new MNFTIssuer();
    issuer.version = decode.readUInt(cellData.slice(0, 2));
    issuer.class_count = decode.readUInt32BE(cellData.slice(2, 10));
    issuer.set_count = decode.readUInt32BE(cellData.slice(10, 18));
    issuer.info_size = decode.readUInt16BE(cellData.slice(18, 22));
    issuer.info = decode.readStr(cellData.slice(22));
    issuer.type_hash = ckbUtils.scriptToHash(type);

    return issuer;
  }

  static getMNFTClass(): MNFTClass {
    // link https://explorer.nervos.org/transaction/0xa9c36e1e7f4cc1c0c7fa715f3eb199c0036e85d2a3a85deb6cf9b6e32db56e5e output#4
    const cellData =
      '000000006300000057c00015476f6c64656e204c6567656e64204f70656e696e670030476f6c64656e204c6567656e6420706c6174666f726d206c61756e6368206d656d656e746f2e20352f31352f32303231004e68747470733a2f2f676f6c64656e6c6567656e642e6f73732d636e2d68616e677a686f752e616c6979756e63732e636f6d2f70726f64756374696f6e2f313632313035343837363631362e706e67';
    const type: CKBComponents.Script = {
      codeHash: '0xd51e6eaf48124c601f41abe173f1da550b4cbca9c6a166781906a287abbb3d9a',
      hashType: 'type',
      args: '0x8f67efedd50c61c9dd332defd4051f08a02d797700000001',
    };

    const decode = new HexDecode();
    const nftClass = new MNFTClass();
    nftClass.IssuerID_byte20 = type.args.slice(0, 42);
    nftClass.class_id = decode.readUInt32BE(type.args.slice(42));
    nftClass.type_hash = ckbUtils.scriptToHash(type);

    nftClass.version = decode.readUInt(cellData.slice(0, 2));
    nftClass.total = decode.readUInt32BE(cellData.slice(2, 10));
    nftClass.issued = decode.readUInt32BE(cellData.slice(10, 18));
    nftClass.configure = decode.readUInt(cellData.slice(18, 20));
    nftClass.name_size = decode.readUInt16BE(cellData.slice(20, 24)); // 21
    nftClass.name = decode.readStr(cellData.slice(24, 66));
    nftClass.description_size = decode.readUInt16BE(cellData.slice(66, 70)); // 48
    nftClass.description = decode.readStr(cellData.slice(70, 166));
    nftClass.renderer_size = decode.readUInt16BE(cellData.slice(166, 170)); // 78
    nftClass.renderer = decode.readStr(cellData.slice(170, 326));

    return nftClass;
  }

  static getMNFTCell(): MNFTCell {
    // link https://explorer.nervos.org/transaction/0xcb720ea12a40f896eb57f937d58f3cf6112c1d74ea470acdd1163a0146565820 output#14
    const cellData = '000000000000000000c000';
    const type: CKBComponents.Script = {
      codeHash: '0x2b24f0d644ccbdd77bbf86b27c8cca02efa0ad051e447c212636d9ee7acaaec9',
      hashType: 'type',
      args: '0x8f67efedd50c61c9dd332defd4051f08a02d7977000000010000000d',
    };

    const decode = new HexDecode();

    const cell = new MNFTCell();
    cell.version = decode.readUInt(cellData.slice(0, 2));

    const uint8Array = Uint8Array.from(Buffer.from(cellData.slice(2, 18), 'hex'));
    const characteristic: number[] = [];
    uint8Array.forEach((x) => characteristic.push(x));
    cell.characteristic = characteristic;

    cell.configure = decode.readUInt(cellData.slice(18, 20));
    cell.state = decode.readUInt(cellData.slice(20, 22));

    cell.IssuerID_byte20 = type.args.slice(0, 42);
    cell.class_id = decode.readUInt32BE(type.args.slice(42, 50));
    cell.TokenID = decode.readUInt32BE(type.args.slice(50));

    return cell;
  }
}
