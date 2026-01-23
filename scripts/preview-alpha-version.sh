#!/bin/bash
# release-alpha.sh
# This script bumps a prerelease to "alpha-" locally without pushing.
# Use this to verify the expected version bump before running the full release

# Exit immediately if any command fails
set -e

# Get short commit hash
GIT_HASH=$(git rev-parse --short HEAD)
GIT_BRANCH_NAME="$(git rev-parse --abbrev-ref HEAD)"

# Extract first match like NDS-123 (any number of digits)
if [[ "$GIT_BRANCH_NAME" =~ (NDS-[0-9]+) ]]; then
  TICKET_ID="${BASH_REMATCH[1]}"
else
# fallback to full branch name if no match - possibly spike branches?
  TICKET_ID="$GIT_BRANCH_NAME"
fi

# should reference the ticket/branch name and latest commit hash
echo "Using preid: alpha-$TICKET_ID-$GIT_HASH"

# Bump only changed packages with prerelease with confirmation left manual (add --yes to auto confirm)
npm run lerna -- version prerelease \
  --preid alpha-$TICKET_ID-$GIT_HASH \
  --no-push \
  --no-git-tag-version
