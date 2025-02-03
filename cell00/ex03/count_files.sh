count=$(find . -maxdepth 1 \( -type f -o -type d \) ! -name '.' | wc -l)

echo "$count"
