import math
import random
import time


def get_random_circle_point(r, x, y):
    t = 2 * math.pi * random.uniform(0, 1)
    r = math.sqrt(random.uniform(0, r))
    x = r * math.cos(t) + x
    y = r * math.sin(t) + y
    return [x, y]

# for i in range(1000):
#     a = get_random_circle_point(0.2, 124.541, 47.5818)
#     print(str(a[0]) + ', ' + str(a[1]) + ',')
#
