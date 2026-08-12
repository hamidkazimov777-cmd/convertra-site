#!/usr/bin/env bash
set -e

# Configuration
export CLOUDFLARE_ACCOUNT_ID="8ffe8da9db38a35b3b2b2038fcd6e6cf"
# Note: Ensure CLOUDFLARE_API_TOKEN is set in your environment before running this script.
# Example: export CLOUDFLARE_API_TOKEN="cfut_EBAE..."

BUCKET_NAME="convertra-downloads"
DOWNLOADS_DIR="desktop/Convertra_macOS"

if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "Error: CLOUDFLARE_API_TOKEN is not set."
  echo "Please run: export CLOUDFLARE_API_TOKEN='your_token_here'"
  exit 1
fi

echo "Creating R2 bucket if it doesn't exist..."
npx wrangler r2 bucket create $BUCKET_NAME || true

echo "Uploading ZIP..."
npx wrangler r2 object put "$BUCKET_NAME/releases/mac/Convertra.zip" --file "$DOWNLOADS_DIR/Convertra.zip" --remote

echo "Upload complete!"
echo "Make sure to connect a custom domain (e.g. dl.convertra.com) to your '$BUCKET_NAME' bucket via the Cloudflare Dashboard to enable public access."
