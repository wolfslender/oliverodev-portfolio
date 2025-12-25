import nextConfig from 'eslint-config-next'

const base = Array.isArray(nextConfig) ? nextConfig : [nextConfig]

export default [
  ...base,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/immutability': 'off',
      'import/no-anonymous-default-export': 'off',
    },
  },
]
