# graphs-from-csv

An example repository for creating website graphs from CSV files. This repository uses c3.js and PapaParse.

### Graph/Chart Library
c3.js: http://c3js.org/

### CSV/JSON Parsing Library
PapaParse: http://papaparse.com/

### Only Requirement
You need a web server. I used python to initiate a web server.

```
python --version
Python 2.7.10
```

```
cd graphs-from-csv/
python -m SimpleHTTPServer
```

Visit http://localhost:8000 to see the website.


### pyServer Library

To make the server run after import, you have to call
call()


The server will have two functions:
update (sent_message) #this message will be sent to the server
recv () # to recv the incoming message. To print the incoming message, you can call revc(1) to print to the console




1. THe interface should have IP connect to rasbperry pi
2. The rasp berry pi should have host as '0.0.0.0' to let 
other users connect to it



### JSON Format
1. The json format should be strictly as following:

m_string = {
            "type": type,
            "x": x,
            "y": y
        }

the type must be either: "coordinate",  or "obstacle"

For example 
m_string = {
            "type": "obstacle",
            "x": x,
            "y": y
        }

or


m_string = {
            "type": "coordinate",
            "x": x,
            "y": y
        }


The color of the obstacle is red, and the color of the coordinate is blue.

### Beacon Scanner
The script can be found in Minh's Ras:
/projects/KhoiDeveloper/EE183DB_WebApp/beacon/node_modules

Just run: $sudo node testBeacon.js



### Simple Setup
1. git clone the whole directory into your linux current directory
2. cd into the folder you just git clone
3. Once you are inside the folder type : http-server - p 8000.
4. Open your web browser type : localhost:8000
The UI should be on  now


To prepare for the server ( or to tweak the IP), find the index.html.
Look for the var connection and change the IP to the one you want the UI connect to
var connection2 is for beacon, you don't need to change it

