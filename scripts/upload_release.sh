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
npx wrangler r2 object put "$BUCKET_NAME/releases/mac/Convertra.zip" --file "$DOWNLOADS_DIR/Convertra.zip"

echo "Uploading PDFs..."
# Assuming you have converted the .md files to .pdf files
# If you only have .md right now, you should convert them first or upload them as .md
# We will check if PDF exists, otherwise upload the MD as a placeholder for testing.
if [ -f "$DOWNLOADS_DIR/Convertra_Guide_RU.pdf" ]; then
  npx wrangler r2 object put "$BUCKET_NAME/docs/ru/Convertra_Guide_RU.pdf" --file "$DOWNLOADS_DIR/Convertra_Guide_RU.pdf"
else
  npx wrangler r2 object put "$BUCKET_NAME/docs/ru/Convertra_Guide_RU.pdf" --file "$DOWNLOADS_DIR/Convertra_Guide_RU.md" --content-type "text/plain"
fi

if [ -f "$DOWNLOADS_DIR/Convertra_Guide_EN.pdf" ]; then
  npx wrangler r2 object put "$BUCKET_NAME/docs/en/Convertra_Guide_EN.pdf" --file "$DOWNLOADS_DIR/Convertra_Guide_EN.pdf"
else
  npx wrangler r2 object put "$BUCKET_NAME/docs/en/Convertra_Guide_EN.pdf" --file "$DOWNLOADS_DIR/Convertra_Guide_EN.md" --content-type "text/plain"
fi

if [ -f "$DOWNLOADS_DIR/Convertra_Guide_ES.pdf" ]; then
  npx wrangler r2 object put "$BUCKET_NAME/docs/es/Convertra_Guide_ES.pdf" --file "$DOWNLOADS_DIR/Convertra_Guide_ES.pdf"
else
  npx wrangler r2 object put "$BUCKET_NAME/docs/es/Convertra_Guide_ES.pdf" --file "$DOWNLOADS_DIR/Convertra_Guide_ES.md" --content-type "text/plain"
fi

echo "Upload complete!"
echo "Make sure to connect a custom domain (e.g. dl.convertra.com) to your '$BUCKET_NAME' bucket via the Cloudflare Dashboard to enable public access."
