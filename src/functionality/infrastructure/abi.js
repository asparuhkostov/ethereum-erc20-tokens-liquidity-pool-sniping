export const abis = {
  uniswapV2: {
    factory: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'token0',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'token1',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'pair',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'PairCreated',
        type: 'event',
      },
      {
        constant: true,
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'allPairs',
        outputs: [
          {
            internalType: 'address',
            name: 'pair',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'allPairsLength',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'tokenA',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'tokenB',
            type: 'address',
          },
        ],
        name: 'createPair',
        outputs: [
          {
            internalType: 'address',
            name: 'pair',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'feeTo',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'feeToSetter',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            internalType: 'address',
            name: 'tokenA',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'tokenB',
            type: 'address',
          },
        ],
        name: 'getPair',
        outputs: [
          {
            internalType: 'address',
            name: 'pair',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'setFeeTo',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'setFeeToSetter',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    router: [
      {
        inputs: [
          { internalType: 'address', name: '_factory', type: 'address' },
          { internalType: 'address', name: '_WETH', type: 'address' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [],
        name: 'WETH',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'tokenA', type: 'address' },
          { internalType: 'address', name: 'tokenB', type: 'address' },
          {
            internalType: 'uint256',
            name: 'amountADesired',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountBDesired',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountAMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountBMin',
            type: 'uint256',
          },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'addLiquidity',
        outputs: [
          { internalType: 'uint256', name: 'amountA', type: 'uint256' },
          { internalType: 'uint256', name: 'amountB', type: 'uint256' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          {
            internalType: 'uint256',
            name: 'amountTokenDesired',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountTokenMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountETHMin',
            type: 'uint256',
          },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'addLiquidityETH',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amountToken',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'amountETH', type: 'uint256' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'factory',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
          { internalType: 'uint256', name: 'reserveIn', type: 'uint256' },
          { internalType: 'uint256', name: 'reserveOut', type: 'uint256' },
        ],
        name: 'getAmountIn',
        outputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
          { internalType: 'uint256', name: 'reserveIn', type: 'uint256' },
          { internalType: 'uint256', name: 'reserveOut', type: 'uint256' },
        ],
        name: 'getAmountOut',
        outputs: [
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
        ],
        name: 'getAmountsIn',
        outputs: [
          {
            internalType: 'uint256[]',
            name: 'amounts',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
        ],
        name: 'getAmountsOut',
        outputs: [
          {
            internalType: 'uint256[]',
            name: 'amounts',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountA', type: 'uint256' },
          { internalType: 'uint256', name: 'reserveA', type: 'uint256' },
          { internalType: 'uint256', name: 'reserveB', type: 'uint256' },
        ],
        name: 'quote',
        outputs: [
          { internalType: 'uint256', name: 'amountB', type: 'uint256' },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'tokenA', type: 'address' },
          { internalType: 'address', name: 'tokenB', type: 'address' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'amountAMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountBMin',
            type: 'uint256',
          },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'removeLiquidity',
        outputs: [
          { internalType: 'uint256', name: 'amountA', type: 'uint256' },
          { internalType: 'uint256', name: 'amountB', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'amountTokenMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountETHMin',
            type: 'uint256',
          },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'removeLiquidityETH',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amountToken',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'amountETH', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'amountTokenMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountETHMin',
            type: 'uint256',
          },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'removeLiquidityETHSupportingFeeOnTransferTokens',
        outputs: [
          { internalType: 'uint256', name: 'amountETH', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'amountTokenMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountETHMin',
            type: 'uint256',
          },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'bool', name: 'approveMax', type: 'bool' },
          { internalType: 'uint8', name: 'v', type: 'uint8' },
          { internalType: 'bytes32', name: 'r', type: 'bytes32' },
          { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'removeLiquidityETHWithPermit',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amountToken',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'amountETH', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'amountTokenMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountETHMin',
            type: 'uint256',
          },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'bool', name: 'approveMax', type: 'bool' },
          { internalType: 'uint8', name: 'v', type: 'uint8' },
          { internalType: 'bytes32', name: 'r', type: 'bytes32' },
          { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
        outputs: [
          { internalType: 'uint256', name: 'amountETH', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'tokenA', type: 'address' },
          { internalType: 'address', name: 'tokenB', type: 'address' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'amountAMin',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountBMin',
            type: 'uint256',
          },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'bool', name: 'approveMax', type: 'bool' },
          { internalType: 'uint8', name: 'v', type: 'uint8' },
          { internalType: 'bytes32', name: 'r', type: 'bytes32' },
          { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'removeLiquidityWithPermit',
        outputs: [
          { internalType: 'uint256', name: 'amountA', type: 'uint256' },
          { internalType: 'uint256', name: 'amountB', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapETHForExactTokens',
        outputs: [
          {
            internalType: 'uint256[]',
            name: 'amounts',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amountOutMin',
            type: 'uint256',
          },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapExactETHForTokens',
        outputs: [
          {
            internalType: 'uint256[]',
            name: 'amounts',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amountOutMin',
            type: 'uint256',
          },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'amountOutMin',
            type: 'uint256',
          },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapExactTokensForETH',
        outputs: [
          {
            internalType: 'uint256[]',
            name: 'amounts',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'amountOutMin',
            type: 'uint256',
          },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'amountOutMin',
            type: 'uint256',
          },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapExactTokensForTokens',
        outputs: [
          {
            internalType: 'uint256[]',
            name: 'amounts',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'amountOutMin',
            type: 'uint256',
          },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'amountInMax',
            type: 'uint256',
          },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapTokensForExactETH',
        outputs: [
          {
            internalType: 'uint256[]',
            name: 'amounts',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'amountInMax',
            type: 'uint256',
          },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapTokensForExactTokens',
        outputs: [
          {
            internalType: 'uint256[]',
            name: 'amounts',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      { stateMutability: 'payable', type: 'receive' },
    ],
    pair: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
        ],
        name: 'Burn',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        name: 'Mint',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0In',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1In',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0Out',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1Out',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
        ],
        name: 'Swap',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint112',
            name: 'reserve0',
            type: 'uint112',
          },
          {
            indexed: false,
            internalType: 'uint112',
            name: 'reserve1',
            type: 'uint112',
          },
        ],
        name: 'Sync',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        constant: true,
        inputs: [],
        name: 'DOMAIN_SEPARATOR',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'MINIMUM_LIQUIDITY',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'PERMIT_TYPEHASH',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
        ],
        name: 'allowance',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'approve',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
        ],
        name: 'burn',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [
          {
            internalType: 'uint8',
            name: '',
            type: 'uint8',
          },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'factory',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getReserves',
        outputs: [
          {
            internalType: 'uint112',
            name: 'reserve0',
            type: 'uint112',
          },
          {
            internalType: 'uint112',
            name: 'reserve1',
            type: 'uint112',
          },
          {
            internalType: 'uint32',
            name: 'blockTimestampLast',
            type: 'uint32',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'initialize',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'kLast',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
        ],
        name: 'mint',
        outputs: [
          {
            internalType: 'uint256',
            name: 'liquidity',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'nonces',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'v',
            type: 'uint8',
          },
          {
            internalType: 'bytes32',
            name: 'r',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 's',
            type: 'bytes32',
          },
        ],
        name: 'permit',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'price0CumulativeLast',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'price1CumulativeLast',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
        ],
        name: 'skim',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount0Out',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount1Out',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'swap',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'sync',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'token0',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'token1',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'transfer',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'transferFrom',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  uniswapV3: {
    factory: [
      { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint24',
            name: 'fee',
            type: 'uint24',
          },
          {
            indexed: true,
            internalType: 'int24',
            name: 'tickSpacing',
            type: 'int24',
          },
        ],
        name: 'FeeAmountEnabled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'token0',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'token1',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint24',
            name: 'fee',
            type: 'uint24',
          },
          {
            indexed: false,
            internalType: 'int24',
            name: 'tickSpacing',
            type: 'int24',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'pool',
            type: 'address',
          },
        ],
        name: 'PoolCreated',
        type: 'event',
      },
      {
        inputs: [
          { internalType: 'address', name: 'tokenA', type: 'address' },
          { internalType: 'address', name: 'tokenB', type: 'address' },
          { internalType: 'uint24', name: 'fee', type: 'uint24' },
        ],
        name: 'createPool',
        outputs: [{ internalType: 'address', name: 'pool', type: 'address' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint24', name: 'fee', type: 'uint24' },
          { internalType: 'int24', name: 'tickSpacing', type: 'int24' },
        ],
        name: 'enableFeeAmount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint24', name: '', type: 'uint24' }],
        name: 'feeAmountTickSpacing',
        outputs: [{ internalType: 'int24', name: '', type: 'int24' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: '', type: 'address' },
          { internalType: 'address', name: '', type: 'address' },
          { internalType: 'uint24', name: '', type: 'uint24' },
        ],
        name: 'getPool',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'parameters',
        outputs: [
          { internalType: 'address', name: 'factory', type: 'address' },
          { internalType: 'address', name: 'token0', type: 'address' },
          { internalType: 'address', name: 'token1', type: 'address' },
          { internalType: 'uint24', name: 'fee', type: 'uint24' },
          { internalType: 'int24', name: 'tickSpacing', type: 'int24' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
        name: 'setOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    router: [
      {
        inputs: [
          { internalType: 'address', name: '_factory', type: 'address' },
          { internalType: 'address', name: '_WETH9', type: 'address' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [],
        name: 'WETH9',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              { internalType: 'bytes', name: 'path', type: 'bytes' },
              {
                internalType: 'address',
                name: 'recipient',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'deadline',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountOutMinimum',
                type: 'uint256',
              },
            ],
            internalType: 'struct ISwapRouter.ExactInputParams',
            name: 'params',
            type: 'tuple',
          },
        ],
        name: 'exactInput',
        outputs: [
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'tokenIn',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'tokenOut',
                type: 'address',
              },
              { internalType: 'uint24', name: 'fee', type: 'uint24' },
              {
                internalType: 'address',
                name: 'recipient',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'deadline',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountOutMinimum',
                type: 'uint256',
              },
              {
                internalType: 'uint160',
                name: 'sqrtPriceLimitX96',
                type: 'uint160',
              },
            ],
            internalType: 'struct ISwapRouter.ExactInputSingleParams',
            name: 'params',
            type: 'tuple',
          },
        ],
        name: 'exactInputSingle',
        outputs: [
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              { internalType: 'bytes', name: 'path', type: 'bytes' },
              {
                internalType: 'address',
                name: 'recipient',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'deadline',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountOut',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountInMaximum',
                type: 'uint256',
              },
            ],
            internalType: 'struct ISwapRouter.ExactOutputParams',
            name: 'params',
            type: 'tuple',
          },
        ],
        name: 'exactOutput',
        outputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'tokenIn',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'tokenOut',
                type: 'address',
              },
              { internalType: 'uint24', name: 'fee', type: 'uint24' },
              {
                internalType: 'address',
                name: 'recipient',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'deadline',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountOut',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountInMaximum',
                type: 'uint256',
              },
              {
                internalType: 'uint160',
                name: 'sqrtPriceLimitX96',
                type: 'uint160',
              },
            ],
            internalType: 'struct ISwapRouter.ExactOutputSingleParams',
            name: 'params',
            type: 'tuple',
          },
        ],
        name: 'exactOutputSingle',
        outputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'factory',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'bytes[]', name: 'data', type: 'bytes[]' }],
        name: 'multicall',
        outputs: [
          { internalType: 'bytes[]', name: 'results', type: 'bytes[]' },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'refundETH',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'uint256', name: 'value', type: 'uint256' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'uint8', name: 'v', type: 'uint8' },
          { internalType: 'bytes32', name: 'r', type: 'bytes32' },
          { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'selfPermit',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'uint256', name: 'nonce', type: 'uint256' },
          { internalType: 'uint256', name: 'expiry', type: 'uint256' },
          { internalType: 'uint8', name: 'v', type: 'uint8' },
          { internalType: 'bytes32', name: 'r', type: 'bytes32' },
          { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'selfPermitAllowed',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'uint256', name: 'nonce', type: 'uint256' },
          { internalType: 'uint256', name: 'expiry', type: 'uint256' },
          { internalType: 'uint8', name: 'v', type: 'uint8' },
          { internalType: 'bytes32', name: 'r', type: 'bytes32' },
          { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'selfPermitAllowedIfNecessary',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'uint256', name: 'value', type: 'uint256' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'uint8', name: 'v', type: 'uint8' },
          { internalType: 'bytes32', name: 'r', type: 'bytes32' },
          { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'selfPermitIfNecessary',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          {
            internalType: 'uint256',
            name: 'amountMinimum',
            type: 'uint256',
          },
          { internalType: 'address', name: 'recipient', type: 'address' },
        ],
        name: 'sweepToken',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          {
            internalType: 'uint256',
            name: 'amountMinimum',
            type: 'uint256',
          },
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'feeBips', type: 'uint256' },
          {
            internalType: 'address',
            name: 'feeRecipient',
            type: 'address',
          },
        ],
        name: 'sweepTokenWithFee',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'int256',
            name: 'amount0Delta',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'amount1Delta',
            type: 'int256',
          },
          { internalType: 'bytes', name: '_data', type: 'bytes' },
        ],
        name: 'uniswapV3SwapCallback',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amountMinimum',
            type: 'uint256',
          },
          { internalType: 'address', name: 'recipient', type: 'address' },
        ],
        name: 'unwrapWETH9',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amountMinimum',
            type: 'uint256',
          },
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'feeBips', type: 'uint256' },
          {
            internalType: 'address',
            name: 'feeRecipient',
            type: 'address',
          },
        ],
        name: 'unwrapWETH9WithFee',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      { stateMutability: 'payable', type: 'receive' },
    ],
    pair: [
      { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'int24',
            name: 'tickLower',
            type: 'int24',
          },
          {
            indexed: true,
            internalType: 'int24',
            name: 'tickUpper',
            type: 'int24',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'amount',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        name: 'Burn',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'int24',
            name: 'tickLower',
            type: 'int24',
          },
          {
            indexed: true,
            internalType: 'int24',
            name: 'tickUpper',
            type: 'int24',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'amount0',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'amount1',
            type: 'uint128',
          },
        ],
        name: 'Collect',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'amount0',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'amount1',
            type: 'uint128',
          },
        ],
        name: 'CollectProtocol',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'paid0',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'paid1',
            type: 'uint256',
          },
        ],
        name: 'Flash',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint16',
            name: 'observationCardinalityNextOld',
            type: 'uint16',
          },
          {
            indexed: false,
            internalType: 'uint16',
            name: 'observationCardinalityNextNew',
            type: 'uint16',
          },
        ],
        name: 'IncreaseObservationCardinalityNext',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint160',
            name: 'sqrtPriceX96',
            type: 'uint160',
          },
          {
            indexed: false,
            internalType: 'int24',
            name: 'tick',
            type: 'int24',
          },
        ],
        name: 'Initialize',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'int24',
            name: 'tickLower',
            type: 'int24',
          },
          {
            indexed: true,
            internalType: 'int24',
            name: 'tickUpper',
            type: 'int24',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'amount',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        name: 'Mint',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint8',
            name: 'feeProtocol0Old',
            type: 'uint8',
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'feeProtocol1Old',
            type: 'uint8',
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'feeProtocol0New',
            type: 'uint8',
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'feeProtocol1New',
            type: 'uint8',
          },
        ],
        name: 'SetFeeProtocol',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'int256',
            name: 'amount0',
            type: 'int256',
          },
          {
            indexed: false,
            internalType: 'int256',
            name: 'amount1',
            type: 'int256',
          },
          {
            indexed: false,
            internalType: 'uint160',
            name: 'sqrtPriceX96',
            type: 'uint160',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'liquidity',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int24',
            name: 'tick',
            type: 'int24',
          },
        ],
        name: 'Swap',
        type: 'event',
      },
      {
        inputs: [
          { internalType: 'int24', name: 'tickLower', type: 'int24' },
          { internalType: 'int24', name: 'tickUpper', type: 'int24' },
          { internalType: 'uint128', name: 'amount', type: 'uint128' },
        ],
        name: 'burn',
        outputs: [
          { internalType: 'uint256', name: 'amount0', type: 'uint256' },
          { internalType: 'uint256', name: 'amount1', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'int24', name: 'tickLower', type: 'int24' },
          { internalType: 'int24', name: 'tickUpper', type: 'int24' },
          {
            internalType: 'uint128',
            name: 'amount0Requested',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'amount1Requested',
            type: 'uint128',
          },
        ],
        name: 'collect',
        outputs: [
          { internalType: 'uint128', name: 'amount0', type: 'uint128' },
          { internalType: 'uint128', name: 'amount1', type: 'uint128' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'recipient', type: 'address' },
          {
            internalType: 'uint128',
            name: 'amount0Requested',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'amount1Requested',
            type: 'uint128',
          },
        ],
        name: 'collectProtocol',
        outputs: [
          { internalType: 'uint128', name: 'amount0', type: 'uint128' },
          { internalType: 'uint128', name: 'amount1', type: 'uint128' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'factory',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'fee',
        outputs: [{ internalType: 'uint24', name: '', type: 'uint24' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'feeGrowthGlobal0X128',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'feeGrowthGlobal1X128',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'uint256', name: 'amount0', type: 'uint256' },
          { internalType: 'uint256', name: 'amount1', type: 'uint256' },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'flash',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint16',
            name: 'observationCardinalityNext',
            type: 'uint16',
          },
        ],
        name: 'increaseObservationCardinalityNext',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96',
            type: 'uint160',
          },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'liquidity',
        outputs: [{ internalType: 'uint128', name: '', type: 'uint128' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'maxLiquidityPerTick',
        outputs: [{ internalType: 'uint128', name: '', type: 'uint128' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'int24', name: 'tickLower', type: 'int24' },
          { internalType: 'int24', name: 'tickUpper', type: 'int24' },
          { internalType: 'uint128', name: 'amount', type: 'uint128' },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'mint',
        outputs: [
          { internalType: 'uint256', name: 'amount0', type: 'uint256' },
          { internalType: 'uint256', name: 'amount1', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'observations',
        outputs: [
          {
            internalType: 'uint32',
            name: 'blockTimestamp',
            type: 'uint32',
          },
          {
            internalType: 'int56',
            name: 'tickCumulative',
            type: 'int56',
          },
          {
            internalType: 'uint160',
            name: 'secondsPerLiquidityCumulativeX128',
            type: 'uint160',
          },
          { internalType: 'bool', name: 'initialized', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint32[]',
            name: 'secondsAgos',
            type: 'uint32[]',
          },
        ],
        name: 'observe',
        outputs: [
          {
            internalType: 'int56[]',
            name: 'tickCumulatives',
            type: 'int56[]',
          },
          {
            internalType: 'uint160[]',
            name: 'secondsPerLiquidityCumulativeX128s',
            type: 'uint160[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        name: 'positions',
        outputs: [
          { internalType: 'uint128', name: 'liquidity', type: 'uint128' },
          {
            internalType: 'uint256',
            name: 'feeGrowthInside0LastX128',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'feeGrowthInside1LastX128',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'tokensOwed0',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'tokensOwed1',
            type: 'uint128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'protocolFees',
        outputs: [
          { internalType: 'uint128', name: 'token0', type: 'uint128' },
          { internalType: 'uint128', name: 'token1', type: 'uint128' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint8', name: 'feeProtocol0', type: 'uint8' },
          { internalType: 'uint8', name: 'feeProtocol1', type: 'uint8' },
        ],
        name: 'setFeeProtocol',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'slot0',
        outputs: [
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96',
            type: 'uint160',
          },
          { internalType: 'int24', name: 'tick', type: 'int24' },
          {
            internalType: 'uint16',
            name: 'observationIndex',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'observationCardinality',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'observationCardinalityNext',
            type: 'uint16',
          },
          { internalType: 'uint8', name: 'feeProtocol', type: 'uint8' },
          { internalType: 'bool', name: 'unlocked', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'int24', name: 'tickLower', type: 'int24' },
          { internalType: 'int24', name: 'tickUpper', type: 'int24' },
        ],
        name: 'snapshotCumulativesInside',
        outputs: [
          {
            internalType: 'int56',
            name: 'tickCumulativeInside',
            type: 'int56',
          },
          {
            internalType: 'uint160',
            name: 'secondsPerLiquidityInsideX128',
            type: 'uint160',
          },
          {
            internalType: 'uint32',
            name: 'secondsInside',
            type: 'uint32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'recipient', type: 'address' },
          { internalType: 'bool', name: 'zeroForOne', type: 'bool' },
          {
            internalType: 'int256',
            name: 'amountSpecified',
            type: 'int256',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceLimitX96',
            type: 'uint160',
          },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'swap',
        outputs: [
          { internalType: 'int256', name: 'amount0', type: 'int256' },
          { internalType: 'int256', name: 'amount1', type: 'int256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'int16', name: '', type: 'int16' }],
        name: 'tickBitmap',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'tickSpacing',
        outputs: [{ internalType: 'int24', name: '', type: 'int24' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'int24', name: '', type: 'int24' }],
        name: 'ticks',
        outputs: [
          {
            internalType: 'uint128',
            name: 'liquidityGross',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'liquidityNet',
            type: 'int128',
          },
          {
            internalType: 'uint256',
            name: 'feeGrowthOutside0X128',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'feeGrowthOutside1X128',
            type: 'uint256',
          },
          {
            internalType: 'int56',
            name: 'tickCumulativeOutside',
            type: 'int56',
          },
          {
            internalType: 'uint160',
            name: 'secondsPerLiquidityOutsideX128',
            type: 'uint160',
          },
          {
            internalType: 'uint32',
            name: 'secondsOutside',
            type: 'uint32',
          },
          { internalType: 'bool', name: 'initialized', type: 'bool' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'token0',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'token1',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    pool: [
      {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'int24',
            name: 'tickLower',
            type: 'int24',
          },
          {
            indexed: true,
            internalType: 'int24',
            name: 'tickUpper',
            type: 'int24',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'amount',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        name: 'Burn',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'int24',
            name: 'tickLower',
            type: 'int24',
          },
          {
            indexed: true,
            internalType: 'int24',
            name: 'tickUpper',
            type: 'int24',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'amount0',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'amount1',
            type: 'uint128',
          },
        ],
        name: 'Collect',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'amount0',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'amount1',
            type: 'uint128',
          },
        ],
        name: 'CollectProtocol',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'paid0',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'paid1',
            type: 'uint256',
          },
        ],
        name: 'Flash',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint16',
            name: 'observationCardinalityNextOld',
            type: 'uint16',
          },
          {
            indexed: false,
            internalType: 'uint16',
            name: 'observationCardinalityNextNew',
            type: 'uint16',
          },
        ],
        name: 'IncreaseObservationCardinalityNext',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint160',
            name: 'sqrtPriceX96',
            type: 'uint160',
          },
          {
            indexed: false,
            internalType: 'int24',
            name: 'tick',
            type: 'int24',
          },
        ],
        name: 'Initialize',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'int24',
            name: 'tickLower',
            type: 'int24',
          },
          {
            indexed: true,
            internalType: 'int24',
            name: 'tickUpper',
            type: 'int24',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'amount',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        name: 'Mint',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint8',
            name: 'feeProtocol0Old',
            type: 'uint8',
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'feeProtocol1Old',
            type: 'uint8',
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'feeProtocol0New',
            type: 'uint8',
          },
          {
            indexed: false,
            internalType: 'uint8',
            name: 'feeProtocol1New',
            type: 'uint8',
          },
        ],
        name: 'SetFeeProtocol',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'int256',
            name: 'amount0',
            type: 'int256',
          },
          {
            indexed: false,
            internalType: 'int256',
            name: 'amount1',
            type: 'int256',
          },
          {
            indexed: false,
            internalType: 'uint160',
            name: 'sqrtPriceX96',
            type: 'uint160',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'liquidity',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int24',
            name: 'tick',
            type: 'int24',
          },
        ],
        name: 'Swap',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'int24',
            name: 'tickLower',
            type: 'int24',
          },
          {
            internalType: 'int24',
            name: 'tickUpper',
            type: 'int24',
          },
          {
            internalType: 'uint128',
            name: 'amount',
            type: 'uint128',
          },
        ],
        name: 'burn',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            internalType: 'int24',
            name: 'tickLower',
            type: 'int24',
          },
          {
            internalType: 'int24',
            name: 'tickUpper',
            type: 'int24',
          },
          {
            internalType: 'uint128',
            name: 'amount0Requested',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'amount1Requested',
            type: 'uint128',
          },
        ],
        name: 'collect',
        outputs: [
          {
            internalType: 'uint128',
            name: 'amount0',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'amount1',
            type: 'uint128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'amount0Requested',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'amount1Requested',
            type: 'uint128',
          },
        ],
        name: 'collectProtocol',
        outputs: [
          {
            internalType: 'uint128',
            name: 'amount0',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'amount1',
            type: 'uint128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'factory',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'fee',
        outputs: [
          {
            internalType: 'uint24',
            name: '',
            type: 'uint24',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'feeGrowthGlobal0X128',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'feeGrowthGlobal1X128',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'flash',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint16',
            name: 'observationCardinalityNext',
            type: 'uint16',
          },
        ],
        name: 'increaseObservationCardinalityNext',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96',
            type: 'uint160',
          },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'liquidity',
        outputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'maxLiquidityPerTick',
        outputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            internalType: 'int24',
            name: 'tickLower',
            type: 'int24',
          },
          {
            internalType: 'int24',
            name: 'tickUpper',
            type: 'int24',
          },
          {
            internalType: 'uint128',
            name: 'amount',
            type: 'uint128',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'mint',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'observations',
        outputs: [
          {
            internalType: 'uint32',
            name: 'blockTimestamp',
            type: 'uint32',
          },
          {
            internalType: 'int56',
            name: 'tickCumulative',
            type: 'int56',
          },
          {
            internalType: 'uint160',
            name: 'secondsPerLiquidityCumulativeX128',
            type: 'uint160',
          },
          {
            internalType: 'bool',
            name: 'initialized',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint32[]',
            name: 'secondsAgos',
            type: 'uint32[]',
          },
        ],
        name: 'observe',
        outputs: [
          {
            internalType: 'int56[]',
            name: 'tickCumulatives',
            type: 'int56[]',
          },
          {
            internalType: 'uint160[]',
            name: 'secondsPerLiquidityCumulativeX128s',
            type: 'uint160[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        name: 'positions',
        outputs: [
          {
            internalType: 'uint128',
            name: 'liquidity',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'feeGrowthInside0LastX128',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'feeGrowthInside1LastX128',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'tokensOwed0',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'tokensOwed1',
            type: 'uint128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'protocolFees',
        outputs: [
          {
            internalType: 'uint128',
            name: 'token0',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'token1',
            type: 'uint128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint8',
            name: 'feeProtocol0',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'feeProtocol1',
            type: 'uint8',
          },
        ],
        name: 'setFeeProtocol',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'slot0',
        outputs: [
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96',
            type: 'uint160',
          },
          {
            internalType: 'int24',
            name: 'tick',
            type: 'int24',
          },
          {
            internalType: 'uint16',
            name: 'observationIndex',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'observationCardinality',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'observationCardinalityNext',
            type: 'uint16',
          },
          {
            internalType: 'uint8',
            name: 'feeProtocol',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'unlocked',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'int24',
            name: 'tickLower',
            type: 'int24',
          },
          {
            internalType: 'int24',
            name: 'tickUpper',
            type: 'int24',
          },
        ],
        name: 'snapshotCumulativesInside',
        outputs: [
          {
            internalType: 'int56',
            name: 'tickCumulativeInside',
            type: 'int56',
          },
          {
            internalType: 'uint160',
            name: 'secondsPerLiquidityInsideX128',
            type: 'uint160',
          },
          {
            internalType: 'uint32',
            name: 'secondsInside',
            type: 'uint32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'zeroForOne',
            type: 'bool',
          },
          {
            internalType: 'int256',
            name: 'amountSpecified',
            type: 'int256',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceLimitX96',
            type: 'uint160',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'swap',
        outputs: [
          {
            internalType: 'int256',
            name: 'amount0',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'amount1',
            type: 'int256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'int16',
            name: '',
            type: 'int16',
          },
        ],
        name: 'tickBitmap',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'tickSpacing',
        outputs: [
          {
            internalType: 'int24',
            name: '',
            type: 'int24',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'int24',
            name: '',
            type: 'int24',
          },
        ],
        name: 'ticks',
        outputs: [
          {
            internalType: 'uint128',
            name: 'liquidityGross',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'liquidityNet',
            type: 'int128',
          },
          {
            internalType: 'uint256',
            name: 'feeGrowthOutside0X128',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'feeGrowthOutside1X128',
            type: 'uint256',
          },
          {
            internalType: 'int56',
            name: 'tickCumulativeOutside',
            type: 'int56',
          },
          {
            internalType: 'uint160',
            name: 'secondsPerLiquidityOutsideX128',
            type: 'uint160',
          },
          {
            internalType: 'uint32',
            name: 'secondsOutside',
            type: 'uint32',
          },
          {
            internalType: 'bool',
            name: 'initialized',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'token0',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'token1',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
  },
  sushiswap: {
    factory: [
      {
        inputs: [
          { internalType: 'address', name: '_feeToSetter', type: 'address' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'token0',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'token1',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'pair',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'PairCreated',
        type: 'event',
      },
      {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'allPairs',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'allPairsLength',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'tokenA', type: 'address' },
          { internalType: 'address', name: 'tokenB', type: 'address' },
        ],
        name: 'createPair',
        outputs: [{ internalType: 'address', name: 'pair', type: 'address' }],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'feeTo',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'feeToSetter',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: '', type: 'address' },
          { internalType: 'address', name: '', type: 'address' },
        ],
        name: 'getPair',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'migrator',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'pairCodeHash',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '_feeTo', type: 'address' }],
        name: 'setFeeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: '_feeToSetter', type: 'address' },
        ],
        name: 'setFeeToSetter',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: '_migrator', type: 'address' },
        ],
        name: 'setMigrator',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    router: [
      {
        inputs: [
          { internalType: 'address', name: '_factory', type: 'address' },
          { internalType: 'address', name: '_WETH', type: 'address' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [],
        name: 'WETH',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'tokenA', type: 'address' },
          { internalType: 'address', name: 'tokenB', type: 'address' },
          { internalType: 'uint256', name: 'amountADesired', type: 'uint256' },
          { internalType: 'uint256', name: 'amountBDesired', type: 'uint256' },
          { internalType: 'uint256', name: 'amountAMin', type: 'uint256' },
          { internalType: 'uint256', name: 'amountBMin', type: 'uint256' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'addLiquidity',
        outputs: [
          { internalType: 'uint256', name: 'amountA', type: 'uint256' },
          { internalType: 'uint256', name: 'amountB', type: 'uint256' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          {
            internalType: 'uint256',
            name: 'amountTokenDesired',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'amountTokenMin', type: 'uint256' },
          { internalType: 'uint256', name: 'amountETHMin', type: 'uint256' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'addLiquidityETH',
        outputs: [
          { internalType: 'uint256', name: 'amountToken', type: 'uint256' },
          { internalType: 'uint256', name: 'amountETH', type: 'uint256' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'factory',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
          { internalType: 'uint256', name: 'reserveIn', type: 'uint256' },
          { internalType: 'uint256', name: 'reserveOut', type: 'uint256' },
        ],
        name: 'getAmountIn',
        outputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
          { internalType: 'uint256', name: 'reserveIn', type: 'uint256' },
          { internalType: 'uint256', name: 'reserveOut', type: 'uint256' },
        ],
        name: 'getAmountOut',
        outputs: [
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
        ],
        name: 'getAmountsIn',
        outputs: [
          { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
        ],
        name: 'getAmountsOut',
        outputs: [
          { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountA', type: 'uint256' },
          { internalType: 'uint256', name: 'reserveA', type: 'uint256' },
          { internalType: 'uint256', name: 'reserveB', type: 'uint256' },
        ],
        name: 'quote',
        outputs: [
          { internalType: 'uint256', name: 'amountB', type: 'uint256' },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'tokenA', type: 'address' },
          { internalType: 'address', name: 'tokenB', type: 'address' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
          { internalType: 'uint256', name: 'amountAMin', type: 'uint256' },
          { internalType: 'uint256', name: 'amountBMin', type: 'uint256' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'removeLiquidity',
        outputs: [
          { internalType: 'uint256', name: 'amountA', type: 'uint256' },
          { internalType: 'uint256', name: 'amountB', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
          { internalType: 'uint256', name: 'amountTokenMin', type: 'uint256' },
          { internalType: 'uint256', name: 'amountETHMin', type: 'uint256' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'removeLiquidityETH',
        outputs: [
          { internalType: 'uint256', name: 'amountToken', type: 'uint256' },
          { internalType: 'uint256', name: 'amountETH', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
          { internalType: 'uint256', name: 'amountTokenMin', type: 'uint256' },
          { internalType: 'uint256', name: 'amountETHMin', type: 'uint256' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'removeLiquidityETHSupportingFeeOnTransferTokens',
        outputs: [
          { internalType: 'uint256', name: 'amountETH', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
          { internalType: 'uint256', name: 'amountTokenMin', type: 'uint256' },
          { internalType: 'uint256', name: 'amountETHMin', type: 'uint256' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'bool', name: 'approveMax', type: 'bool' },
          { internalType: 'uint8', name: 'v', type: 'uint8' },
          { internalType: 'bytes32', name: 'r', type: 'bytes32' },
          { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'removeLiquidityETHWithPermit',
        outputs: [
          { internalType: 'uint256', name: 'amountToken', type: 'uint256' },
          { internalType: 'uint256', name: 'amountETH', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'token', type: 'address' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
          { internalType: 'uint256', name: 'amountTokenMin', type: 'uint256' },
          { internalType: 'uint256', name: 'amountETHMin', type: 'uint256' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'bool', name: 'approveMax', type: 'bool' },
          { internalType: 'uint8', name: 'v', type: 'uint8' },
          { internalType: 'bytes32', name: 'r', type: 'bytes32' },
          { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
        outputs: [
          { internalType: 'uint256', name: 'amountETH', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'address', name: 'tokenA', type: 'address' },
          { internalType: 'address', name: 'tokenB', type: 'address' },
          { internalType: 'uint256', name: 'liquidity', type: 'uint256' },
          { internalType: 'uint256', name: 'amountAMin', type: 'uint256' },
          { internalType: 'uint256', name: 'amountBMin', type: 'uint256' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'bool', name: 'approveMax', type: 'bool' },
          { internalType: 'uint8', name: 'v', type: 'uint8' },
          { internalType: 'bytes32', name: 'r', type: 'bytes32' },
          { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'removeLiquidityWithPermit',
        outputs: [
          { internalType: 'uint256', name: 'amountA', type: 'uint256' },
          { internalType: 'uint256', name: 'amountB', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapETHForExactTokens',
        outputs: [
          { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapExactETHForTokens',
        outputs: [
          { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
          { internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapExactTokensForETH',
        outputs: [
          { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
          { internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
          { internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapExactTokensForTokens',
        outputs: [
          { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountIn', type: 'uint256' },
          { internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
          { internalType: 'uint256', name: 'amountInMax', type: 'uint256' },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapTokensForExactETH',
        outputs: [
          { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          { internalType: 'uint256', name: 'amountOut', type: 'uint256' },
          { internalType: 'uint256', name: 'amountInMax', type: 'uint256' },
          { internalType: 'address[]', name: 'path', type: 'address[]' },
          { internalType: 'address', name: 'to', type: 'address' },
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        ],
        name: 'swapTokensForExactTokens',
        outputs: [
          { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      { stateMutability: 'payable', type: 'receive' },
    ],
    pair: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
        ],
        name: 'Burn',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        name: 'Mint',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0In',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1In',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount0Out',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount1Out',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
        ],
        name: 'Swap',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint112',
            name: 'reserve0',
            type: 'uint112',
          },
          {
            indexed: false,
            internalType: 'uint112',
            name: 'reserve1',
            type: 'uint112',
          },
        ],
        name: 'Sync',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        constant: true,
        inputs: [],
        name: 'DOMAIN_SEPARATOR',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'MINIMUM_LIQUIDITY',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'PERMIT_TYPEHASH',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
        ],
        name: 'allowance',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'approve',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
        ],
        name: 'burn',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount0',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount1',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [
          {
            internalType: 'uint8',
            name: '',
            type: 'uint8',
          },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'factory',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getReserves',
        outputs: [
          {
            internalType: 'uint112',
            name: 'reserve0',
            type: 'uint112',
          },
          {
            internalType: 'uint112',
            name: 'reserve1',
            type: 'uint112',
          },
          {
            internalType: 'uint32',
            name: 'blockTimestampLast',
            type: 'uint32',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'initialize',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'kLast',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
        ],
        name: 'mint',
        outputs: [
          {
            internalType: 'uint256',
            name: 'liquidity',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'nonces',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'v',
            type: 'uint8',
          },
          {
            internalType: 'bytes32',
            name: 'r',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 's',
            type: 'bytes32',
          },
        ],
        name: 'permit',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'price0CumulativeLast',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'price1CumulativeLast',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
        ],
        name: 'skim',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount0Out',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount1Out',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'swap',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'sync',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'token0',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'token1',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'transfer',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'transferFrom',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  erc20: [
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_spender',
          type: 'address',
        },
        {
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_from',
          type: 'address',
        },
        {
          name: '_to',
          type: 'address',
        },
        {
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '_owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          name: 'balance',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_to',
          type: 'address',
        },
        {
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '_owner',
          type: 'address',
        },
        {
          name: '_spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      payable: true,
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
  ],
}
