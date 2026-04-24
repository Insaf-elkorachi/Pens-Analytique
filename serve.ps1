param(
  [int]$Port = 5173
)

$ErrorActionPreference = "Stop"

python -m http.server $Port --directory public --bind 127.0.0.1

