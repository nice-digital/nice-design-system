# Run as `./docker-dev.sh`
# Have you made sure that c is a shared drive in docker GUI?

HOST_PORT=12345
CONTAINER_PORT=54321
LIVE_RELOAD_PORT=35729
IMAGE_NAME="experience"
CONTAINER_NAME="experience"

# Opens a URL in the browser, cross platform
# Expects first (and only) parameter to be a URL
open_url() {
  # http://stackoverflow.com/a/3124679/486434
  if which xdg-open > /dev/null 2>&1
  then
    xdg-open $1
  elif which gnome-open > /dev/null 2>&1
  then
    gnome-open $1
  elif which python > /dev/null 2>&1;
  then
    python -mwebbrowser $1
  fi
}

# Check the custom image already exists, if it doesn't then build it
if [[ "$(docker images -q $IMAGE_NAME 2> /dev/null)" == "" ]]; then
  echo "Image $IMAGE_NAME not found, building it first..."
  docker build -t $IMAGE_NAME .
  echo "...image $IMAGE_NAME built"
else
  echo "Image $IMAGE_NAME has already been built"
fi

CONTAINER_RUNNING=$(docker inspect -f "{{.State.Running}}" $CONTAINER_NAME 2> /dev/null)

# Container doesn't exist so create it ($? uses last run command)
if [ $? -eq 1 ]; then

  echo "Container $CONTAINER_NAME not found, creating & running it..."
  # MSYS_NO_PATHCONV otherwise Windows tries to be clever with paths and fails
  # --rm Remove container if it already exists
  # --name Name of the container
  # -p Port mapping from host:container
  # -p 35729:35729 for mapping livereload port
  # -v /app/node_modules to mount a volume to avoid copying node modules from host to container
  # /$(pwd):/app to share code from host to container
  open_url http://localhost:$HOST_PORT
  MSYS_NO_PATHCONV=1 docker run -i --rm --name $CONTAINER_NAME -e "PORT=$CONTAINER_PORT" -p "$HOST_PORT:$CONTAINER_PORT" -p "$LIVE_RELOAD_PORT:$LIVE_RELOAD_PORT" -v /app/node_modules -v /$(pwd):/app $IMAGE_NAME grunt watch

# Container is already running, so just attach to it to see output
elif [ $CONTAINER_RUNNING = true ]; then

  echo "Container $CONTAINER_NAME is already running. Attaching to it."
  open_url http://localhost:$HOST_PORT
  docker attach $CONTAINER_NAME

# Container is stoppped, so run it
else

  echo "Container $CONTAINER_NAME is stopped, so start and attach"
  open_url http://localhost:$HOST_PORT
  docker start -a $CONTAINER_NAME

fi
