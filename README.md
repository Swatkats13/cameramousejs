# Cameramousejs

An Electron rewrite of CameraMouse app (http://www.cameramouse.org/)

# Description

Includes a server (Electron app) and a client (a python app). The server controls the UI and mouse movements whereas the client does video processing. When started, the app starts a server on port 3000. The client then sends commands to the server to control the mouse.

# App architecture

See app architecture here https://www.figma.com/file/RgboeCOay5qZk3moqGAtgd/CameraMouse

# Install and run

Steps:

1.  Install js packages. run the command below in the root folder

    npm install

2.  install python packages
    cd into src/pyTracker

    a. create venv environment

         python3 -m venv .venv

    b. activate environment.

    for mac/linux

        source .venv/bin/activate

    for windows

        .venv/Scripts/Activate

    c. install python packages into virtual environment
    
    The current frozen package versions were installed and worked on a Python 3.8 virtual environment. If you are using a Python version other than 3.8 and are experiencing dependency conflicts, remove     the specific versions of the following packages from 'requirements.txt': protobuf, dlib, tensorboard, tensorboard-data-server, tensorboard-estimator, keras, google-auth-oauthlib. Then run the           following command. 

         pip install -r requirements.txt

    Note: On windows, install tensorflow instead of tensorflow-macos

3.  Run project
    in root folder, run

         npm run start

4.  Note that in dev mode, you may continue to see "tracker initializing" message even after tracker is initialized. Ingore the message and press Enter (with the Electron app in focus) to begin moving your mouse with head movements.

# Packaging

a. Build python exe file with pyinstaller. First, cd into src/pyTracker , activate virtual environment and run

    pyinstaller main.spec

b. Build electron app.

Set runPythonExeInDevMode to false in src/config/config.ts before building electron app.

    npm run make

# Debugging

After modifying python code and building a new executable, you might want to make the sure the new executable works as intended. To ensure the built python executable works fine, modify electron code to start the python executable instead of running python code. To do this, set line 6 in src/config/config.js to

    const runPythonExeInDevMode = true;

# Permissions

Built cameramouse app requires accessibility permissions to actually move mouse. On Mac, go to System Preferences -> Privacy and Security -> Privacy -> Accessibility and check the box either to CameraMouse. If you are in development mode, you will most likely see your IDE instead. 
