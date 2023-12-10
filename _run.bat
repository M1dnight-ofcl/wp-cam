cd server
echo "Starting Backend Server"
start yarn dev
cd ..
echo "Starting Frontend Server"
cd client
start yarn start
cd ..
echo "Finished!"