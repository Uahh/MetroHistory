import json
from pprint import pprint
# with open(r'data/stations.txt', encoding='utf_8') as f:
#     test_line = json.load(f)
#     f.close()

ans = []
f = open("data/stations.txt", encoding='utf8')  # 返回一个文件对象
line = f.readline()  # 调用文件的 readline()方法
while line:
    temp = line.split(',')
    a = temp.pop()
    b = temp.pop()
    temp.pop()
    temp.pop()
    temp.pop()
    temp.pop()
    temp.append(b)
    temp.append(a)
    temp1 = temp[0]
    temp[0] = str(temp[1]) + '号线'
    temp[1] = temp1
    if temp[0] == "5号线":
        temp[1] = temp[1].split("\"")[1]
        temp[2] = int(temp[2]) - 1
        temp[3] = float(temp[3])
        temp[4] = float(temp[4])
        ans.append(temp)
    line = f.readline()
f.close()


def takeThird(elem):
    return elem[2]


ans.sort(key=takeThird)

with open('a.json', 'w', encoding='utf-8') as f:
    json.dump(ans, f,ensure_ascii=False,indent = 4)
