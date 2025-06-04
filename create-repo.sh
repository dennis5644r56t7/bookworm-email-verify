export GITHUB_TOKEN=YOUR_PERSONAL_ACCESS_TOKEN
curl -X POST -H "Authorization: token $GITHUB_TOKEN" -H "Accept: application/vnd.github.v3+json" https://api.github.com/user/repos -d "{\"name\":\"bookworm-email-verify\", \"description\":\"Email verification page for Bookworm Hub Admin\"}"
