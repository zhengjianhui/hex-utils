import { MNFTFactory } from './model/MNFTFactory';

function main() {
  const issuer = MNFTFactory.getIssuer();
  console.log(issuer);
}

main();
