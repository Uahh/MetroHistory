# import json
# from pprint import pprint
# with open(r'data/test.json', encoding='utf_8') as f:
#     test_line = json.load(f)
#     f.close()

# for i in test_line['metro']:
#     for j in i:
#         temp = j[0]
#         j[0] = str(j[1])
#         j[1] = temp
#         if j[0] == "1":
#             j.append("(128, 128, 128)")
#         if j[0] == "2":
#             j.append("(0, 255, 0)")
#         # j.append("")
