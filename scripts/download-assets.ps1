New-Item -ItemType Directory -Force -Path 'public/assets' | Out-Null
$urls = @(
  'https://clickytour.club/wp-content/uploads/2025/07/Transparent-Logo-1-e1752933596331.png',
  'https://clickytour.club/wp-content/uploads/2025/07/logo-1.png',
  'https://clickytour.club/wp-content/uploads/2025/07/logo-2.png',
  'https://clickytour.club/wp-content/uploads/2025/07/logo-3.png',
  'https://clickytour.club/wp-content/uploads/2025/07/logo-4.png',
  'https://clickytour.club/wp-content/uploads/2025/07/logo-5.png',
  'https://clickytour.club/wp-content/uploads/2026/02/Clickytour-Network.webp',
  'https://clickytour.club/wp-content/uploads/2026/01/MEoFVtNZOxowrgAF7f90V5hyXPJ8rdQxqZJf2PyO-8.png',
  'https://clickytour.club/wp-content/uploads/2026/02/wJ3mhXtw4yJIa4JfCRC885n5w8nPMZWn6zdxBVSm-1.png'
)

foreach ($u in $urls) {
  $name = Split-Path $u -Leaf
  Invoke-WebRequest -Uri $u -OutFile ("public/assets/$name")
}
Write-Host 'done'
