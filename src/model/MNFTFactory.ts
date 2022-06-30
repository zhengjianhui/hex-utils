import { Issuer } from './Issuer';
import { HexDecode } from '../serialization/HexDecode';
import * as ckbUtils from '@nervosnetwork/ckb-sdk-utils';

export class MNFTFactory {
  static getIssuer(): Issuer {
    // link https://explorer.nervos.org/transaction/0x821162575c5c9ecc2222d3c7cdaf4cfc501aa4a5c500777b9e8c0b802cfd2b86
    const cellData =
      '00000000010000000000e17b226e616d65223a224e657276696e61204c616273222c22776569626f223a2268747470733a2f2f7777772e6e657276696e612e696f222c22656d61696c223a22636f6e74616374406e657276696e612e696f222c22696d616765223a2268747470733a2f2f692e6c6f6c692e6e65742f323032312f30342f32392f49696762704f57503866773971446e2e706e67222c2277656273697465223a2268747470733a2f2f7777772e6e657276696e612e696f222c226465736372697074696f6e223a224d656c74696e672054776f20576f726c647320546f6765746865722e227d';
    const type: CKBComponents.Script = {
      codeHash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',
      hashType: 'type',
      args: '0x21ce4263c6c538cf299cf78e430a6751255ba1bc',
    };

    const encode = new HexDecode();

    const issuer = new Issuer();
    issuer.version = encode.readUInt(cellData.slice(0, 2));
    issuer.class_count = encode.readUInt32BE(cellData.slice(2, 10));
    issuer.set_count = encode.readUInt32BE(cellData.slice(10, 18));
    issuer.info_size = encode.readUInt16BE(cellData.slice(18, 22));
    issuer.info = encode.readStr(cellData.slice(22));
    issuer.type_hash = ckbUtils.scriptToHash(type);

    return issuer;
  }
}
