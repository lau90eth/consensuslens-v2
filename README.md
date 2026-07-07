# ConsensusLens v2

Live benchmark dashboard for GenLayer Intelligent Contracts on Bradbury Testnet.

## What's new in v2

- **True consensus rate**: distinguishes real consensus (no leader timeout, no appeals, validator majority alignment) from finalized-after-appeal-chain transactions
- **Appeal chain detection**: identifies transactions that finalized only after multiple appeal rounds
- Uses `validator_appeal_number`, `leader_timeout`, and `validator_majority_alignment` fields from the Bradbury explorer API

## Live demo

https://lau90eth.github.io/consensuslens-v2/

## Metrics

- **True Consensus Rate**: FINALIZED with no leader_timeout + validator_appeal_number === 0 + validator_majority_alignment !== false
- **Finalized Rate**: all FINALIZED transactions regardless of appeal chain
- **Appeal Chain**: FINALIZED transactions that required leader timeout recovery or multiple appeals
- **Undetermined Rate**: transactions that failed to reach consensus

## Tech

- Vanilla HTML/JS
- Bradbury explorer API (`/api/v1/transactions`)
- No wallet required
