@echo "[92mStarting Dev Server...[0m"
@echo "[96m> Starting Server Script[0m"
cd server
start "Backend Script" yarn start
cd ..
@echo "[96m> Starting Config Menu[0m"
cd client
start "Frontend Script" yarn dev
cd ..
@echo "[92mFinished![0m"