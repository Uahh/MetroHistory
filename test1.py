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
    temp.pop()
    temp.pop()
    temp.pop()
    temp.pop()
    temp1 = temp[0]
    temp[0] = str(temp[1]) + '号线'
    temp[1] = temp1
    if temp[0] == "3号线":
        temp[2] = int(temp[2])
        temp.append("(251, 210, 8)")
        ans.append(temp)
    line = f.readline()
f.close()


def takeThird(elem):
    return elem[2]


ans.sort(key=takeThird)

print(json.dumps({"metro": ans}, ensure_ascii=False))
