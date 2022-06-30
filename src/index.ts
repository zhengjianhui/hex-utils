import { MNFTFactory } from './model/MNFTFactory';
import { MNFTClass } from './model/MNFTClass';

function main() {
  const issuer = MNFTFactory.getMNFTIssuer();
  console.log(issuer);

  const mnftClass = MNFTFactory.getMNFTClass();
  console.log(mnftClass);

  console.log(mnftClass.IssuerID_byte20 == issuer.type_hash.slice(0, 42));
}

main();
