/** @type {import('next').NextConfig} */

const isGithubActionsPages = process.env.GITHUB_ACTIONS_PAGES || false;

let assetPrefix = ''
let basePath;

if (isGithubActionsPages) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
}

module.exports = nextConfig;
