import json
from pprint import pprint

template_string = """
{
    // ${frame_number}
    type: 'lines',
    coordinateSystem: 'bmap',
    polyline: true,
    data: ${data},
    silent: true,
    effect: {
        show: true
    },
    lineStyle: {
        color: '${rgb}',
        opacity: 1,
        width: 2,
        cap: 'round',
        shadowColor: '${rgba}',
        shadowBlur: 5
    }
}
"""

with open(r'data/test2.json', encoding='utf_8') as f:
    raw_data = json.load(f)
    f.close()

def get_time_line():
    time_line = {}
    begin = 2042
    end = 0
    for metro_line in raw_data['metro']:
        for frame in metro_line[0]['history']:
            if frame[0] < begin:
                begin = frame[0]
            if frame[1] > end:
                end = frame[1]
    for i in range(begin, end + 1):
        time_line[str(i)] = []
    return time_line

time_line = get_time_line()
cnt = 0
for metro_line in raw_data['metro']:
    line_color = 'rgb(' + metro_line[0]['rgb'] + ')'
    for frame in metro_line[0]['history']:
        begin = frame[2]
        end = frame[3]
        for i in range(frame[0], frame[1] + 1):
            frame_number = frame[0] + i - frame[0]
            rgb = line_color
            rgba = 'rgba(' + metro_line[0]['rgb'] + '0.3)'
            data = []
            for i in range(begin, end + 1):
                data.append([metro_line[i][4], metro_line[i][3]])
            temp = template_string.replace("${frame_number}", str(frame_number))\
                                .replace("${data}", str(data))\
                                .replace("${rgb}", str(rgb))\
                                .replace("${rgba}", str(rgba))\
                                .replace('\n', '')
            time_line[str(frame_number)].append(temp)
            cnt += 1
print(cnt)
for i in time_line.keys():
    print(time_line[i][0])
# pprint(json.dumps(time_line))