export function getNonWethTokenInPair(token0, token1, weth) {
  return token0 === weth ? token1 : token0
}
