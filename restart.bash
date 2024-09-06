echo "Restarting..."
rm -rf client/node_modules
docker system prune -a
docker compose up --watch