import pyServer
import json
import time
def main():
    pyServer.call()
    type = "coordinate"
    type2 = "obstacle"
    x=1
    y=1

    x_2 =10
    y_2 =10
    while 1:
        m_string = {
            "type": type,
            "x": x,
            "y": y
        }

        m_string_2 = {
            "type": type2,
            "x":x_2,
            "y":y_2

        }
        data = json.dumps(m_string)
        data_2 = json.dumps(m_string_2)

        pyServer.update(data)
        time.sleep(0.5)
        pyServer.update(data_2)
        print (data)
        x +=100
        y+=100
        x_2+=50
        y_2+=50
        time.sleep(0.5)


main()
