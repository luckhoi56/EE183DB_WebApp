

import threading
import time
from websocket_server import WebsocketServer
input = "this is for testing purpose"
flag =1
# Called for every client connecting (after handshake)
def new_client(client, server):
	print("New client connected and was given id %d" % client['id'])
	server.send_message_to_all("Hey all, a new client has joined us")


# Called for every client disconnecting
def client_left(client, server):
	print("Client(%d) disconnected" % client['id'])

#if len(message) > 200:
	#	message = message[:200]+'..'
# Called when a client sends a message
def message_received(client, server, message):
    global flag
    global input
    if len(message) > 200:
        message = message[:200]+'..'
    print("Client(%d) said: %s" % (client['id'], message))
    #server.send_message_to_all(input)
    #print ("Send intput: %d", flag)
    #flag = flag +1
    #print(flag)


PORT=8181
server = WebsocketServer(PORT)

#client = WebsocketServer



def call():


    thread = threading.Thread(target=update, args=())
    thread.daemon = True
    thread.start()

def update():
    while 1:
        global flag
        flag = flag + 1
        temp = str(flag)
        server.send_message_to_all(temp)
        time.sleep (0.5)
        #print (flag )
#while 1:
def server_run():
    global flag
    server.set_fn_new_client(new_client)
    server.set_fn_client_left(client_left)
    server.set_fn_message_received(message_received)
	#server.send_message_to_all(message_sent(client,server,"hardcode"));
    #server.send_message_to_all(flag)


    server.run_forever()




def main():
        call()

        server_run()

main()