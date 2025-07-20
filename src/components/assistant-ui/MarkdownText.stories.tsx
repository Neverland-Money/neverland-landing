import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MarkdownText } from './MarkdownText';

const meta: Meta<typeof MarkdownText> = {
  title: 'Assistant UI/MarkdownText',
  component: MarkdownText,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock the MarkdownTextPrimitive context for Storybook
const withMarkdownContext = (content: string) => {
  const Component = (Story: React.ComponentType) => {
    // Mock the assistant-ui context that provides markdown content
    return (
      <div data-markdown-content={content}>
        <Story />
      </div>
    );
  };
  Component.displayName = 'MarkdownContextWrapper';
  return Component;
};

export const BasicText: Story = {
  decorators: [
    withMarkdownContext(`This is a simple paragraph with **bold text** and *italic text*.

Here's another paragraph with some inline \`code\` and a [link](https://example.com).`),
  ],
};

export const Headings: Story = {
  decorators: [
    withMarkdownContext(`# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

This demonstrates all the heading levels supported by the markdown component.`),
  ],
};

export const Lists: Story = {
  decorators: [
    withMarkdownContext(`## Unordered List

- First item
- Second item
  - Nested item
  - Another nested item
- Third item

## Ordered List

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

## Task List

- [x] Completed task
- [ ] Pending task
- [ ] Another pending task`),
  ],
};

export const CodeBlocks: Story = {
  decorators: [
    withMarkdownContext(`Here's some inline \`code\` and a code block:

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');
\`\`\`

And here's a TypeScript example:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};
\`\`\``),
  ],
};

export const Tables: Story = {
  decorators: [
    withMarkdownContext(`## Table Example

| Feature | Description | Status |
|---------|-------------|--------|
| **Headings** | H1-H6 support | ✅ Complete |
| **Lists** | Ordered & unordered | ✅ Complete |
| **Code** | Inline and blocks | ✅ Complete |
| **Tables** | With alignment | ✅ Complete |
| **Links** | Internal & external | ✅ Complete |

## Aligned Table

| Left | Center | Right |
|:-----|:------:|------:|
| Left aligned | Center aligned | Right aligned |
| Text | Text | Text |`),
  ],
};

export const Blockquotes: Story = {
  decorators: [
    withMarkdownContext(`> This is a blockquote.
> 
> It can span multiple lines and contain **formatting**.

> **Note:** This is an important callout.
> 
> You can include lists in blockquotes:
> - Item 1
> - Item 2`),
  ],
};

export const MixedContent: Story = {
  decorators: [
    withMarkdownContext(`# DeFi Protocol Documentation

## Overview

Welcome to **Neverland**, a next-generation DeFi lending protocol that combines:

- ✨ **Self-repaying loans**
- 🔒 **Battle-tested security** from Aave V3
- 🗳️ **Vote escrow tokenomics**
- ⚡ **Ultra-fast transactions** on Monad

### Getting Started

1. **Connect your wallet**
2. **Supply assets** to earn yield
3. **Borrow funds** using your collateral
4. **Earn DUST rewards** for participation

> **Important:** Always ensure your position remains healthy to avoid liquidation.

### Code Example

Here's how to interact with the protocol:

\`\`\`solidity
// Supply ETH to the protocol
function supply(uint256 amount) external {
    IERC20(asset).transferFrom(msg.sender, address(this), amount);
    _mint(msg.sender, amount);
    emit Supply(msg.sender, amount);
}
\`\`\`

### Protocol Statistics

| Metric | Value | Change |
|--------|-------|--------|
| **TVL** | $2.8B | +15.2% |
| **Users** | 234K | +8.5% |
| **Transactions** | 1.2M | +22.1% |

---

For more information, visit our [documentation](https://docs.neverland.money).`),
  ],
};

export const EmptyContent: Story = {
  decorators: [withMarkdownContext('')],
};

export const LongContent: Story = {
  decorators: [
    withMarkdownContext(`# Comprehensive DeFi Guide

## Introduction

DeFi (Decentralized Finance) represents a paradigm shift in financial services, moving from traditional centralized institutions to decentralized protocols built on blockchain technology.

### Key Benefits

1. **Permissionless Access**: Anyone with an internet connection can participate
2. **Transparency**: All transactions are visible on the blockchain
3. **Composability**: Protocols can be combined like building blocks
4. **Global Reach**: No geographical restrictions
5. **24/7 Operations**: Markets never close

### Core Components

#### Lending & Borrowing

Traditional banking requires:
- Credit checks
- Lengthy approval processes  
- Geographic restrictions
- Limited operating hours

DeFi lending protocols offer:
- Instant loans
- No credit checks
- Global accessibility
- Transparent interest rates

#### Automated Market Makers (AMMs)

AMMs revolutionize trading by:
- Eliminating order books
- Using mathematical formulas for pricing
- Enabling anyone to provide liquidity
- Offering continuous market availability

#### Yield Farming

Yield farming allows users to:
- Earn rewards for providing liquidity
- Compound returns through multiple protocols
- Participate in protocol governance
- Access new token distributions

## Technical Implementation

### Smart Contracts

\`\`\`solidity
pragma solidity ^0.8.0;

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract LendingPool {
    mapping(address => uint256) public deposits;
    mapping(address => uint256) public borrows;
    
    IERC20 public immutable asset;
    uint256 public totalDeposits;
    uint256 public totalBorrows;
    
    constructor(address _asset) {
        asset = IERC20(_asset);
    }
    
    function deposit(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        
        asset.transferFrom(msg.sender, address(this), amount);
        deposits[msg.sender] += amount;
        totalDeposits += amount;
        
        emit Deposit(msg.sender, amount);
    }
}
\`\`\`

### Oracle Integration

Price oracles provide critical data for:
- Collateral valuation
- Liquidation thresholds
- Interest rate calculations
- Risk management

## Risk Considerations

> **Warning**: DeFi protocols carry significant risks including:
> - Smart contract vulnerabilities
> - Price volatility
> - Liquidation risk
> - Regulatory uncertainty

### Mitigation Strategies

1. **Diversification**: Don't put all funds in one protocol
2. **Research**: Understand the protocols you use
3. **Conservative Leverage**: Maintain healthy collateral ratios
4. **Stay Informed**: Keep up with protocol updates and risks

## Conclusion

DeFi represents the future of finance, but requires careful consideration and risk management. Always DYOR (Do Your Own Research) before participating in any protocol.`),
  ],
};

export const WithDarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className='rounded-lg bg-gray-900 p-6'>
        <Story />
      </div>
    ),
    withMarkdownContext(`# Dark Theme Example

This content is displayed on a **dark background** to show how the markdown styling adapts.

\`\`\`javascript
console.log('Code blocks should be visible on dark backgrounds');
\`\`\`

> Blockquotes should also maintain good contrast.`),
  ],
};
