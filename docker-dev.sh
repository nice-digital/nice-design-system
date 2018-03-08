# Copies the current directory into the Docker container as a volume and runs Jekyll
# inside the container on port 9001.
MSYS_NO_PATHCONV=1 docker run --rm \
  --name design-system-site \
  -v "$PWD":/usr/src/app \
  -p 9001:9001 \
  -it starefossen/github-pages \
  jekyll serve -d /_gh_pages --watch --force_polling --incremental -H 0.0.0.0 -P 9001