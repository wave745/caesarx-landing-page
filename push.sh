#!/bin/bash

# Script to push Caesar X Landing Page to Titus34ad's GitHub
# Make sure Titus34ad has created the repository first!

echo "🚀 Pushing Caesar X Landing Page to Titus34ad's GitHub..."
echo ""
echo "Repository: https://github.com/Titus34ad/caesarx-landing-page"
echo ""
echo "⚠️  Make sure Titus34ad has created the repository first!"
echo "⚠️  You'll need your GitHub Personal Access Token"
echo ""

# Check if we're in the right directory
if [ ! -f "src/pages/BetaLandingPage.tsx" ]; then
    echo "❌ Error: Please run this script from /tmp/caesarx-landing-page"
    exit 1
fi

# Show current status
echo "📦 Current commit:"
git log --oneline -1
echo ""

# Try to push
echo "📤 Pushing to GitHub..."
echo "   Username: wave745"
echo "   Password: (use your Personal Access Token, not your GitHub password)"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "🔗 Repository: https://github.com/Titus34ad/caesarx-landing-page"
else
    echo ""
    echo "❌ Push failed. Common issues:"
    echo "   1. Repository doesn't exist yet (Titus34ad needs to create it)"
    echo "   2. Authentication failed (check your Personal Access Token)"
    echo "   3. No access to Titus34ad's repository"
    echo ""
    echo "💡 Alternative: Share the zip file at /tmp/caesarx-landing-page.zip"
fi
