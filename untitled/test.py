import pyServer
import json
import time
import random
def main():
    pyServer.call()
    type = "coordinate"
    type2 = "obstacle"
    x1=1
    y1=1

    x2 =10
    y2 =10

    x3 = 11
    y3 = 11

    x4 = 12
    y4 = 12

    x5 = 13
    y5 = 13

    x6 = 14
    y6 = 14

    while 1:
        m_string = {

            "x1": x1,
            "y1": y1,
            "x2": x2,
            "y2": y2,
            "x3": x3,
            "y3": y3,
            "x4": x4,
            "y4": y4,
            "x5": x5,
            "y5": y5,
            "x6": x6,
            "y6": y6
        }




        data = json.dumps(m_string)


        pyServer.update(data)
        print (data)

        x1 =random.uniform(0,100)
        y1 = random.uniform(0,100)

        x2 = x2 + 1
        y2 = y2 +  1

        x3 = x3 +  1
        y3 = y3 +  1

        x4 = x4 +  1
        y4 = y4 +  1

        x5 = x5 +  1
        y5 = y5 +  1

        x6 = x6 +  1
        y6 = y6 +  1


        time.sleep(0.4)



main()
