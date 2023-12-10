cd server
echo "Starting Backend Server"
start yarn dev
cd ..
echo "Starting Frontend Server"
cd client
start yarn dev
cd ..
echo "Finished!"