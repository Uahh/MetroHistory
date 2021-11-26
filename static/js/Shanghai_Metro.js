
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;

        myChart.setOption(
            {
                
        bmap: {
            center: [121.3803798526, 31.1128250311],
            zoom: 12,
            roam: true
        }
        ,
                
        timeline: {
            axisType: 'category',
            loop: false,
            playInterval: 1000,
            data: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,],
            label: {
                autoPlay: true,
                formatter: '{value}'
            }
        }
        ,
                options: [{
	series: [
                {
                    // 1990
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1990
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 1991
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1991
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 1992
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1992
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 1994
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1994
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 1997
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1997
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 1998
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1998
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 1999
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1999
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1999
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2001
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2001
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2001
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2002
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2002
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2002
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2002
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.365797, 31.223998], [121.333274, 31.20056], [121.327907, 31.200316], [121.307524, 31.195431]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.812958, 31.155679], [121.803224, 31.174953], [121.76216, 31.205201], [121.730308, 31.198595], [121.704499, 31.192886], [121.687295, 31.203168], [121.680337, 31.219751], [121.662625, 31.219828], [121.627183, 31.216662], [121.627183, 31.216662], [121.608557, 31.209932], [121.594061, 31.207879], [121.563913, 31.209155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.365797, 31.223998], [121.333274, 31.20056], [121.327907, 31.200316], [121.307524, 31.195431]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.812958, 31.155679], [121.803224, 31.174953], [121.76216, 31.205201], [121.730308, 31.198595], [121.704499, 31.192886], [121.687295, 31.203168], [121.680337, 31.219751], [121.662625, 31.219828], [121.627183, 31.216662], [121.627183, 31.216662], [121.608557, 31.209932], [121.594061, 31.207879], [121.563913, 31.209155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.518803, 31.06706], [121.51713, 31.079655], [121.515133, 31.089988], [121.512891, 31.102197], [121.504377, 31.124907], [121.496279, 31.146696], [121.487012, 31.159351], [121.50029, 31.16671]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.513177, 31.327743], [121.514701, 31.318613], [121.520633, 31.308746], [121.521191, 31.303805], [121.516743, 31.295352], [121.51305, 31.288214], [121.50817, 31.280779], [121.500859, 31.274187], [121.495445, 31.264649], [121.490774, 31.257732], [121.488783, 31.250088], [121.490857, 31.243738], [121.4939, 31.234005], [121.489485, 31.224674], [121.481686, 31.221998], [121.465323, 31.221939], [121.450771, 31.214439], [121.440977, 31.208554], [121.428032, 31.20317], [121.418434, 31.202693], [121.410671, 31.204634], [121.398444, 31.205074], [121.386467, 31.199878], [121.373597, 31.196049], [121.3539, 31.197476], [121.333274, 31.20056], [121.327907, 31.200316]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.386467, 31.199878], [121.37699, 31.182886], [121.37097, 31.175533], [121.361249, 31.171619]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.365797, 31.223998], [121.333274, 31.20056], [121.327907, 31.200316], [121.307524, 31.195431]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.812958, 31.155679], [121.803224, 31.174953], [121.76216, 31.205201], [121.730308, 31.198595], [121.704499, 31.192886], [121.687295, 31.203168], [121.680337, 31.219751], [121.662625, 31.219828], [121.627183, 31.216662], [121.627183, 31.216662], [121.608557, 31.209932], [121.594061, 31.207879], [121.563913, 31.209155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.395296, 31.326259], [121.38016, 31.328108], [121.379313, 31.350576], [121.368889, 31.363427], [121.362293, 31.370197], [121.364185, 31.394383], [121.356426, 31.407854]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.518803, 31.06706], [121.51713, 31.079655], [121.515133, 31.089988], [121.512891, 31.102197], [121.504377, 31.124907], [121.496279, 31.146696], [121.487012, 31.159351], [121.50029, 31.16671]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.513177, 31.327743], [121.514701, 31.318613], [121.520633, 31.308746], [121.521191, 31.303805], [121.516743, 31.295352], [121.51305, 31.288214], [121.50817, 31.280779], [121.500859, 31.274187], [121.495445, 31.264649], [121.490774, 31.257732], [121.488783, 31.250088], [121.490857, 31.243738], [121.4939, 31.234005], [121.489485, 31.224674], [121.481686, 31.221998], [121.465323, 31.221939], [121.450771, 31.214439], [121.440977, 31.208554], [121.428032, 31.20317], [121.418434, 31.202693], [121.410671, 31.204634], [121.398444, 31.205074], [121.386467, 31.199878], [121.373597, 31.196049], [121.3539, 31.197476], [121.333274, 31.20056], [121.327907, 31.200316]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.386467, 31.199878], [121.37699, 31.182886], [121.37097, 31.175533], [121.361249, 31.171619]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.365797, 31.223998], [121.333274, 31.20056], [121.327907, 31.200316], [121.307524, 31.195431]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.812958, 31.155679], [121.803224, 31.174953], [121.76216, 31.205201], [121.730308, 31.198595], [121.704499, 31.192886], [121.687295, 31.203168], [121.680337, 31.219751], [121.662625, 31.219828], [121.627183, 31.216662], [121.627183, 31.216662], [121.608557, 31.209932], [121.594061, 31.207879], [121.563913, 31.209155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.395296, 31.326259], [121.38016, 31.328108], [121.379313, 31.350576], [121.368889, 31.363427], [121.362293, 31.370197], [121.364185, 31.394383], [121.356426, 31.407854]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.518803, 31.06706], [121.51713, 31.079655], [121.515133, 31.089988], [121.512891, 31.102197], [121.504377, 31.124907], [121.496279, 31.146696], [121.487012, 31.159351], [121.50029, 31.16671]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.513177, 31.327743], [121.514701, 31.318613], [121.520633, 31.308746], [121.521191, 31.303805], [121.516743, 31.295352], [121.51305, 31.288214], [121.50817, 31.280779], [121.500859, 31.274187], [121.495445, 31.264649], [121.490774, 31.257732], [121.488783, 31.250088], [121.490857, 31.243738], [121.4939, 31.234005], [121.489485, 31.224674], [121.481686, 31.221998], [121.465323, 31.221939], [121.450771, 31.214439], [121.440977, 31.208554], [121.428032, 31.20317], [121.418434, 31.202693], [121.410671, 31.204634], [121.398444, 31.205074], [121.386467, 31.199878], [121.373597, 31.196049], [121.3539, 31.197476], [121.333274, 31.20056], [121.327907, 31.200316]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.386467, 31.199878], [121.37699, 31.182886], [121.37097, 31.175533], [121.361249, 31.171619]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.365797, 31.223998], [121.333274, 31.20056], [121.327907, 31.200316], [121.307524, 31.195431]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.812958, 31.155679], [121.803224, 31.174953], [121.76216, 31.205201], [121.730308, 31.198595], [121.704499, 31.192886], [121.687295, 31.203168], [121.680337, 31.219751], [121.662625, 31.219828], [121.627183, 31.216662], [121.627183, 31.216662], [121.608557, 31.209932], [121.594061, 31.207879], [121.563913, 31.209155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50168, 31.154367], [121.487012, 31.159351]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.395296, 31.326259], [121.38016, 31.328108], [121.379313, 31.350576], [121.368889, 31.363427], [121.362293, 31.370197], [121.364185, 31.394383], [121.356426, 31.407854]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.513177, 31.327743], [121.514701, 31.318613], [121.520633, 31.308746], [121.521191, 31.303805], [121.516743, 31.295352], [121.51305, 31.288214], [121.50817, 31.280779], [121.500859, 31.274187], [121.495445, 31.264649], [121.490774, 31.257732], [121.488783, 31.250088], [121.490857, 31.243738], [121.4939, 31.234005], [121.489485, 31.224674], [121.481686, 31.221998], [121.465323, 31.221939], [121.450771, 31.214439], [121.440977, 31.208554], [121.428032, 31.20317], [121.418434, 31.202693], [121.410671, 31.204634], [121.398444, 31.205074], [121.386467, 31.199878], [121.373597, 31.196049], [121.3539, 31.197476], [121.333274, 31.20056], [121.327907, 31.200316]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.386467, 31.199878], [121.37699, 31.182886], [121.37097, 31.175533], [121.361249, 31.171619]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.518803, 31.06706], [121.51713, 31.079655], [121.515133, 31.089988], [121.512891, 31.102197], [121.504377, 31.124907], [121.496279, 31.146696], [121.487012, 31.159351], [121.50029, 31.16671]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2011
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50168, 31.154367], [121.487012, 31.159351]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.518803, 31.06706], [121.51713, 31.079655], [121.515133, 31.089988], [121.512891, 31.102197], [121.504377, 31.124907], [121.496279, 31.146696], [121.487012, 31.159351], [121.50029, 31.16671]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.365797, 31.223998], [121.333274, 31.20056], [121.327907, 31.200316], [121.307524, 31.195431]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.812958, 31.155679], [121.803224, 31.174953], [121.76216, 31.205201], [121.730308, 31.198595], [121.704499, 31.192886], [121.687295, 31.203168], [121.680337, 31.219751], [121.662625, 31.219828], [121.627183, 31.216662], [121.627183, 31.216662], [121.608557, 31.209932], [121.594061, 31.207879], [121.563913, 31.209155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.395296, 31.326259], [121.38016, 31.328108], [121.379313, 31.350576], [121.368889, 31.363427], [121.362293, 31.370197], [121.364185, 31.394383], [121.356426, 31.407854]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.513177, 31.327743], [121.514701, 31.318613], [121.520633, 31.308746], [121.521191, 31.303805], [121.516743, 31.295352], [121.51305, 31.288214], [121.50817, 31.280779], [121.500859, 31.274187], [121.495445, 31.264649], [121.490774, 31.257732], [121.488783, 31.250088], [121.490857, 31.243738], [121.4939, 31.234005], [121.489485, 31.224674], [121.481686, 31.221998], [121.465323, 31.221939], [121.450771, 31.214439], [121.440977, 31.208554], [121.428032, 31.20317], [121.418434, 31.202693], [121.410671, 31.204634], [121.398444, 31.205074], [121.386467, 31.199878], [121.373597, 31.196049], [121.3539, 31.197476], [121.333274, 31.20056], [121.327907, 31.200316]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.386467, 31.199878], [121.37699, 31.182886], [121.37097, 31.175533], [121.361249, 31.171619]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.518803, 31.06706], [121.51713, 31.079655], [121.515133, 31.089988], [121.512891, 31.102197], [121.504377, 31.124907], [121.496279, 31.146696], [121.487012, 31.159351], [121.50029, 31.16671]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.365797, 31.223998], [121.333274, 31.20056], [121.327907, 31.200316], [121.307524, 31.195431]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.812958, 31.155679], [121.803224, 31.174953], [121.76216, 31.205201], [121.730308, 31.198595], [121.704499, 31.192886], [121.687295, 31.203168], [121.680337, 31.219751], [121.662625, 31.219828], [121.627183, 31.216662], [121.627183, 31.216662], [121.608557, 31.209932], [121.594061, 31.207879], [121.563913, 31.209155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.395296, 31.326259], [121.38016, 31.328108], [121.379313, 31.350576], [121.368889, 31.363427], [121.362293, 31.370197], [121.364185, 31.394383], [121.356426, 31.407854]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.513177, 31.327743], [121.514701, 31.318613], [121.520633, 31.308746], [121.521191, 31.303805], [121.516743, 31.295352], [121.51305, 31.288214], [121.50817, 31.280779], [121.500859, 31.274187], [121.495445, 31.264649], [121.490774, 31.257732], [121.488783, 31.250088], [121.490857, 31.243738], [121.4939, 31.234005], [121.489485, 31.224674], [121.481686, 31.221998], [121.465323, 31.221939], [121.450771, 31.214439], [121.440977, 31.208554], [121.428032, 31.20317], [121.418434, 31.202693], [121.410671, 31.204634], [121.398444, 31.205074], [121.386467, 31.199878], [121.373597, 31.196049], [121.3539, 31.197476], [121.333274, 31.20056], [121.327907, 31.200316]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.386467, 31.199878], [121.37699, 31.182886], [121.37097, 31.175533], [121.361249, 31.171619]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2011
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50168, 31.154367], [121.487012, 31.159351]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.518803, 31.06706], [121.51713, 31.079655], [121.515133, 31.089988], [121.512891, 31.102197], [121.504377, 31.124907], [121.496279, 31.146696], [121.487012, 31.159351], [121.50029, 31.16671]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.365797, 31.223998], [121.333274, 31.20056], [121.327907, 31.200316], [121.307524, 31.195431]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.812958, 31.155679], [121.803224, 31.174953], [121.76216, 31.205201], [121.730308, 31.198595], [121.704499, 31.192886], [121.687295, 31.203168], [121.680337, 31.219751], [121.662625, 31.219828], [121.627183, 31.216662], [121.627183, 31.216662], [121.608557, 31.209932], [121.594061, 31.207879], [121.563913, 31.209155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.395296, 31.326259], [121.38016, 31.328108], [121.379313, 31.350576], [121.368889, 31.363427], [121.362293, 31.370197], [121.364185, 31.394383], [121.356426, 31.407854]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.513177, 31.327743], [121.514701, 31.318613], [121.520633, 31.308746], [121.521191, 31.303805], [121.516743, 31.295352], [121.51305, 31.288214], [121.50817, 31.280779], [121.500859, 31.274187], [121.495445, 31.264649], [121.490774, 31.257732], [121.488783, 31.250088], [121.490857, 31.243738], [121.4939, 31.234005], [121.489485, 31.224674], [121.481686, 31.221998], [121.465323, 31.221939], [121.450771, 31.214439], [121.440977, 31.208554], [121.428032, 31.20317], [121.418434, 31.202693], [121.410671, 31.204634], [121.398444, 31.205074], [121.386467, 31.199878], [121.373597, 31.196049], [121.3539, 31.197476], [121.333274, 31.20056], [121.327907, 31.200316]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.386467, 31.199878], [121.37699, 31.182886], [121.37097, 31.175533], [121.361249, 31.171619]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2011
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50168, 31.154367], [121.487012, 31.159351]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2014
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.426372, 31.02433], [121.429892, 31.011737], [121.438912, 30.995618], [121.448398, 30.972266], [121.455718, 30.948118], [121.470082, 30.937138], [121.490476, 30.93837], [121.498872, 30.934518], [121.502571, 30.919789]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2014
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.689456, 31.277528], [121.674616, 31.274658], [121.663154, 31.272096], [121.645188, 31.268979], [121.635127, 31.270013], [121.617808, 31.266371], [121.604405, 31.258499], [121.584211, 31.247139], [121.564879, 31.238309], [121.555022, 31.233791], [121.533435, 31.23485]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.518803, 31.06706], [121.51713, 31.079655], [121.515133, 31.089988], [121.512891, 31.102197], [121.504377, 31.124907], [121.496279, 31.146696], [121.487012, 31.159351], [121.50029, 31.16671]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.365797, 31.223998], [121.333274, 31.20056], [121.327907, 31.200316], [121.307524, 31.195431]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.812958, 31.155679], [121.803224, 31.174953], [121.76216, 31.205201], [121.730308, 31.198595], [121.704499, 31.192886], [121.687295, 31.203168], [121.680337, 31.219751], [121.662625, 31.219828], [121.627183, 31.216662], [121.627183, 31.216662], [121.608557, 31.209932], [121.594061, 31.207879], [121.563913, 31.209155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.395296, 31.326259], [121.38016, 31.328108], [121.379313, 31.350576], [121.368889, 31.363427], [121.362293, 31.370197], [121.364185, 31.394383], [121.356426, 31.407854]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.513177, 31.327743], [121.514701, 31.318613], [121.520633, 31.308746], [121.521191, 31.303805], [121.516743, 31.295352], [121.51305, 31.288214], [121.50817, 31.280779], [121.500859, 31.274187], [121.495445, 31.264649], [121.490774, 31.257732], [121.488783, 31.250088], [121.490857, 31.243738], [121.4939, 31.234005], [121.489485, 31.224674], [121.481686, 31.221998], [121.465323, 31.221939], [121.450771, 31.214439], [121.440977, 31.208554], [121.428032, 31.20317], [121.418434, 31.202693], [121.410671, 31.204634], [121.398444, 31.205074], [121.386467, 31.199878], [121.373597, 31.196049], [121.3539, 31.197476], [121.333274, 31.20056], [121.327907, 31.200316]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.386467, 31.199878], [121.37699, 31.182886], [121.37097, 31.175533], [121.361249, 31.171619]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2011
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50168, 31.154367], [121.487012, 31.159351]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2015
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.426372, 31.02433], [121.429892, 31.011737], [121.438912, 30.995618], [121.448398, 30.972266], [121.455718, 30.948118], [121.470082, 30.937138], [121.490476, 30.93837], [121.498872, 30.934518], [121.502571, 30.919789]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2015
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.689456, 31.277528], [121.674616, 31.274658], [121.663154, 31.272096], [121.645188, 31.268979], [121.635127, 31.270013], [121.617808, 31.266371], [121.604405, 31.258499], [121.584211, 31.247139], [121.564879, 31.238309], [121.555022, 31.233791], [121.533435, 31.23485]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.518803, 31.06706], [121.51713, 31.079655], [121.515133, 31.089988], [121.512891, 31.102197], [121.504377, 31.124907], [121.496279, 31.146696], [121.487012, 31.159351], [121.50029, 31.16671]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.365797, 31.223998], [121.333274, 31.20056], [121.327907, 31.200316], [121.307524, 31.195431]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.812958, 31.155679], [121.803224, 31.174953], [121.76216, 31.205201], [121.730308, 31.198595], [121.704499, 31.192886], [121.687295, 31.203168], [121.680337, 31.219751], [121.662625, 31.219828], [121.627183, 31.216662], [121.627183, 31.216662], [121.608557, 31.209932], [121.594061, 31.207879], [121.563913, 31.209155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.395296, 31.326259], [121.38016, 31.328108], [121.379313, 31.350576], [121.368889, 31.363427], [121.362293, 31.370197], [121.364185, 31.394383], [121.356426, 31.407854]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.513177, 31.327743], [121.514701, 31.318613], [121.520633, 31.308746], [121.521191, 31.303805], [121.516743, 31.295352], [121.51305, 31.288214], [121.50817, 31.280779], [121.500859, 31.274187], [121.495445, 31.264649], [121.490774, 31.257732], [121.488783, 31.250088], [121.490857, 31.243738], [121.4939, 31.234005], [121.489485, 31.224674], [121.481686, 31.221998], [121.465323, 31.221939], [121.450771, 31.214439], [121.440977, 31.208554], [121.428032, 31.20317], [121.418434, 31.202693], [121.410671, 31.204634], [121.398444, 31.205074], [121.386467, 31.199878], [121.373597, 31.196049], [121.3539, 31.197476], [121.333274, 31.20056], [121.327907, 31.200316]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.386467, 31.199878], [121.37699, 31.182886], [121.37097, 31.175533], [121.361249, 31.171619]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2011
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50168, 31.154367], [121.487012, 31.159351]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2016
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.426372, 31.02433], [121.429892, 31.011737], [121.438912, 30.995618], [121.448398, 30.972266], [121.455718, 30.948118], [121.470082, 30.937138], [121.490476, 30.93837], [121.498872, 30.934518], [121.502571, 30.919789]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2016
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.689456, 31.277528], [121.674616, 31.274658], [121.663154, 31.272096], [121.645188, 31.268979], [121.635127, 31.270013], [121.617808, 31.266371], [121.604405, 31.258499], [121.584211, 31.247139], [121.564879, 31.238309], [121.555022, 31.233791], [121.533435, 31.23485]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.518803, 31.06706], [121.51713, 31.079655], [121.515133, 31.089988], [121.512891, 31.102197], [121.504377, 31.124907], [121.496279, 31.146696], [121.487012, 31.159351], [121.50029, 31.16671]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.365797, 31.223998], [121.333274, 31.20056], [121.327907, 31.200316], [121.307524, 31.195431]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.812958, 31.155679], [121.803224, 31.174953], [121.76216, 31.205201], [121.730308, 31.198595], [121.704499, 31.192886], [121.687295, 31.203168], [121.680337, 31.219751], [121.662625, 31.219828], [121.627183, 31.216662], [121.627183, 31.216662], [121.608557, 31.209932], [121.594061, 31.207879], [121.563913, 31.209155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.395296, 31.326259], [121.38016, 31.328108], [121.379313, 31.350576], [121.368889, 31.363427], [121.362293, 31.370197], [121.364185, 31.394383], [121.356426, 31.407854]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.513177, 31.327743], [121.514701, 31.318613], [121.520633, 31.308746], [121.521191, 31.303805], [121.516743, 31.295352], [121.51305, 31.288214], [121.50817, 31.280779], [121.500859, 31.274187], [121.495445, 31.264649], [121.490774, 31.257732], [121.488783, 31.250088], [121.490857, 31.243738], [121.4939, 31.234005], [121.489485, 31.224674], [121.481686, 31.221998], [121.465323, 31.221939], [121.450771, 31.214439], [121.440977, 31.208554], [121.428032, 31.20317], [121.418434, 31.202693], [121.410671, 31.204634], [121.398444, 31.205074], [121.386467, 31.199878], [121.373597, 31.196049], [121.3539, 31.197476], [121.333274, 31.20056], [121.327907, 31.200316]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.386467, 31.199878], [121.37699, 31.182886], [121.37097, 31.175533], [121.361249, 31.171619]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2011
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50168, 31.154367], [121.487012, 31.159351]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2017
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.426372, 31.02433], [121.429892, 31.011737], [121.438912, 30.995618], [121.448398, 30.972266], [121.455718, 30.948118], [121.470082, 30.937138], [121.490476, 30.93837], [121.498872, 30.934518], [121.502571, 30.919789]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2017
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.689456, 31.277528], [121.674616, 31.274658], [121.663154, 31.272096], [121.645188, 31.268979], [121.635127, 31.270013], [121.617808, 31.266371], [121.604405, 31.258499], [121.584211, 31.247139], [121.564879, 31.238309], [121.555022, 31.233791], [121.533435, 31.23485]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2017
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.519928, 31.345278], [121.545871, 31.359772], [121.556004, 31.357984], [121.569946, 31.359032], [121.581229, 31.359341], [121.597039, 31.357244]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(128, 128, 128)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(128, 128, 128, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.518803, 31.06706], [121.51713, 31.079655], [121.515133, 31.089988], [121.512891, 31.102197], [121.504377, 31.124907], [121.496279, 31.146696], [121.487012, 31.159351], [121.50029, 31.16671]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.365797, 31.223998], [121.333274, 31.20056], [121.327907, 31.200316], [121.307524, 31.195431]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.812958, 31.155679], [121.803224, 31.174953], [121.76216, 31.205201], [121.730308, 31.198595], [121.704499, 31.192886], [121.687295, 31.203168], [121.680337, 31.219751], [121.662625, 31.219828], [121.627183, 31.216662], [121.627183, 31.216662], [121.608557, 31.209932], [121.594061, 31.207879], [121.563913, 31.209155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.395296, 31.326259], [121.38016, 31.328108], [121.379313, 31.350576], [121.368889, 31.363427], [121.362293, 31.370197], [121.364185, 31.394383], [121.356426, 31.407854]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.513177, 31.327743], [121.514701, 31.318613], [121.520633, 31.308746], [121.521191, 31.303805], [121.516743, 31.295352], [121.51305, 31.288214], [121.50817, 31.280779], [121.500859, 31.274187], [121.495445, 31.264649], [121.490774, 31.257732], [121.488783, 31.250088], [121.490857, 31.243738], [121.4939, 31.234005], [121.489485, 31.224674], [121.481686, 31.221998], [121.465323, 31.221939], [121.450771, 31.214439], [121.440977, 31.208554], [121.428032, 31.20317], [121.418434, 31.202693], [121.410671, 31.204634], [121.398444, 31.205074], [121.386467, 31.199878], [121.373597, 31.196049], [121.3539, 31.197476], [121.333274, 31.20056], [121.327907, 31.200316]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.386467, 31.199878], [121.37699, 31.182886], [121.37097, 31.175533], [121.361249, 31.171619]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2011
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50168, 31.154367], [121.487012, 31.159351]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2018
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.426372, 31.02433], [121.429892, 31.011737], [121.438912, 30.995618], [121.448398, 30.972266], [121.455718, 30.948118], [121.470082, 30.937138], [121.490476, 30.93837], [121.498872, 30.934518], [121.502571, 30.919789]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2018
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.519928, 31.345278], [121.545871, 31.359772], [121.556004, 31.357984], [121.569946, 31.359032], [121.581229, 31.359341], [121.597039, 31.357244]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.518803, 31.06706], [121.51713, 31.079655], [121.515133, 31.089988], [121.512891, 31.102197], [121.504377, 31.124907], [121.496279, 31.146696], [121.487012, 31.159351], [121.50029, 31.16671]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.365797, 31.223998], [121.333274, 31.20056], [121.327907, 31.200316], [121.307524, 31.195431]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.812958, 31.155679], [121.803224, 31.174953], [121.76216, 31.205201], [121.730308, 31.198595], [121.704499, 31.192886], [121.687295, 31.203168], [121.680337, 31.219751], [121.662625, 31.219828], [121.627183, 31.216662], [121.627183, 31.216662], [121.608557, 31.209932], [121.594061, 31.207879], [121.563913, 31.209155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.395296, 31.326259], [121.38016, 31.328108], [121.379313, 31.350576], [121.368889, 31.363427], [121.362293, 31.370197], [121.364185, 31.394383], [121.356426, 31.407854]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.513177, 31.327743], [121.514701, 31.318613], [121.520633, 31.308746], [121.521191, 31.303805], [121.516743, 31.295352], [121.51305, 31.288214], [121.50817, 31.280779], [121.500859, 31.274187], [121.495445, 31.264649], [121.490774, 31.257732], [121.488783, 31.250088], [121.490857, 31.243738], [121.4939, 31.234005], [121.489485, 31.224674], [121.481686, 31.221998], [121.465323, 31.221939], [121.450771, 31.214439], [121.440977, 31.208554], [121.428032, 31.20317], [121.418434, 31.202693], [121.410671, 31.204634], [121.398444, 31.205074], [121.386467, 31.199878], [121.373597, 31.196049], [121.3539, 31.197476], [121.333274, 31.20056], [121.327907, 31.200316]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.386467, 31.199878], [121.37699, 31.182886], [121.37097, 31.175533], [121.361249, 31.171619]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2011
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50168, 31.154367], [121.487012, 31.159351]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2017
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.689456, 31.277528], [121.674616, 31.274658], [121.663154, 31.272096], [121.645188, 31.268979], [121.635127, 31.270013], [121.617808, 31.266371], [121.604405, 31.258499], [121.584211, 31.247139], [121.564879, 31.238309], [121.555022, 31.233791], [121.533435, 31.23485]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2019
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.519928, 31.345278], [121.545871, 31.359772], [121.556004, 31.357984], [121.569946, 31.359032], [121.581229, 31.359341], [121.597039, 31.357244]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(215, 215, 215)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(215, 215, 215, 0.6)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.518803, 31.06706], [121.51713, 31.079655], [121.515133, 31.089988], [121.512891, 31.102197], [121.504377, 31.124907], [121.496279, 31.146696], [121.487012, 31.159351], [121.50029, 31.16671]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.365797, 31.223998], [121.333274, 31.20056], [121.327907, 31.200316], [121.307524, 31.195431]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.812958, 31.155679], [121.803224, 31.174953], [121.76216, 31.205201], [121.730308, 31.198595], [121.704499, 31.192886], [121.687295, 31.203168], [121.680337, 31.219751], [121.662625, 31.219828], [121.627183, 31.216662], [121.627183, 31.216662], [121.608557, 31.209932], [121.594061, 31.207879], [121.563913, 31.209155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.395296, 31.326259], [121.38016, 31.328108], [121.379313, 31.350576], [121.368889, 31.363427], [121.362293, 31.370197], [121.364185, 31.394383], [121.356426, 31.407854]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.513177, 31.327743], [121.514701, 31.318613], [121.520633, 31.308746], [121.521191, 31.303805], [121.516743, 31.295352], [121.51305, 31.288214], [121.50817, 31.280779], [121.500859, 31.274187], [121.495445, 31.264649], [121.490774, 31.257732], [121.488783, 31.250088], [121.490857, 31.243738], [121.4939, 31.234005], [121.489485, 31.224674], [121.481686, 31.221998], [121.465323, 31.221939], [121.450771, 31.214439], [121.440977, 31.208554], [121.428032, 31.20317], [121.418434, 31.202693], [121.410671, 31.204634], [121.398444, 31.205074], [121.386467, 31.199878], [121.373597, 31.196049], [121.3539, 31.197476], [121.333274, 31.20056], [121.327907, 31.200316]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.386467, 31.199878], [121.37699, 31.182886], [121.37097, 31.175533], [121.361249, 31.171619]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2011
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50168, 31.154367], [121.487012, 31.159351]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2017
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.689456, 31.277528], [121.674616, 31.274658], [121.663154, 31.272096], [121.645188, 31.268979], [121.635127, 31.270013], [121.617808, 31.266371], [121.604405, 31.258499], [121.584211, 31.247139], [121.564879, 31.238309], [121.555022, 31.233791], [121.533435, 31.23485]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2018
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.426372, 31.02433], [121.429892, 31.011737], [121.438912, 30.995618], [121.448398, 30.972266], [121.455718, 30.948118], [121.470082, 30.937138], [121.490476, 30.93837], [121.498872, 30.934518], [121.502571, 30.919789]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},{
	series: [
                {
                    // 2020
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.519928, 31.345278], [121.545871, 31.359772], [121.556004, 31.357984], [121.569946, 31.359032], [121.581229, 31.359341], [121.597039, 31.357244]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1993
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.42068, 31.148312], [121.436708, 31.160405], [121.441431, 31.174651], [121.443402, 31.188814], [121.443173, 31.200871]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1995
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.443173, 31.200871], [121.45316, 31.211335], [121.456628, 31.219964], [121.465323, 31.221939], [121.479798, 31.228753], [121.481033, 31.238802], [121.474802, 31.244699], [121.465237, 31.24716], [121.46396, 31.255155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 1996
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.399814, 31.126929], [121.409334, 31.136734], [121.42068, 31.148312]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.563913, 31.209155], [121.557176, 31.215933], [121.550621, 31.225524], [121.533435, 31.23485], [121.521998, 31.239079], [121.508824, 31.243637], [121.490857, 31.243738], [121.481033, 31.238802], [121.467221, 31.234971], [121.453901, 31.229402], [121.437716, 31.226546], [121.422977, 31.224163], [121.410818, 31.216959]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2000
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.436708, 31.160405], [121.44963, 31.164304], [121.450601, 31.176281], [121.444739, 31.182978], [121.433798, 31.192584], [121.428032, 31.20317], [121.423584, 31.215865], [121.422977, 31.224163], [121.419507, 31.237991], [121.424183, 31.244839], [121.436805, 31.253], [121.447452, 31.261022], [121.46396, 31.255155], [121.483032, 31.257464], [121.486639, 31.265746], [121.485807, 31.276632], [121.48899, 31.287038], [121.489614, 31.295096], [121.491636, 31.311153]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2003
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.391623, 31.116581], [121.392332, 31.103958], [121.396872, 31.095083], [121.408435, 31.072842], [121.416485, 31.051134], [121.422973, 31.032572], [121.426372, 31.02433], [121.416554, 31.017141], [121.401635, 31.013066], [121.387319, 31.009198], [121.376495, 31.006315]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2004
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.46396, 31.255155], [121.465616, 31.265275], [121.461893, 31.27806], [121.458503, 31.285845], [121.45656, 31.298815], [121.455097, 31.312943], [121.453464, 31.325355], [121.447817, 31.337798], [121.444185, 31.345991], [121.440458, 31.361557]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2005
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.534381, 31.217627], [121.538513, 31.229007], [121.533435, 31.23485], [121.526013, 31.245796], [121.523944, 31.257681], [121.519576, 31.263723], [121.507604, 31.26658], [121.495445, 31.264649], [121.483032, 31.257464], [121.46396, 31.255155], [121.447452, 31.261022], [121.436805, 31.253], [121.424183, 31.244839], [121.419507, 31.237991], [121.422977, 31.224163], [121.423584, 31.215865], [121.428032, 31.20317], [121.433798, 31.192584], [121.443402, 31.188814], [121.450248, 31.19218], [121.461154, 31.197304], [121.470103, 31.200369]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.422977, 31.224163], [121.410818, 31.216959], [121.393671, 31.220485], [121.38064, 31.222104], [121.365797, 31.223998]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2006
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.491636, 31.311153], [121.491418, 31.325557], [121.498185, 31.337669], [121.50714, 31.350804], [121.505406, 31.363662], [121.499387, 31.376563], [121.494718, 31.387101], [121.486126, 31.401287], [121.48254, 31.40993], [121.467851, 31.414261], [121.446217, 31.414218]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(251, 210, 8)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(251, 210, 8, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.440458, 31.361557], [121.437357, 31.376207], [121.434336, 31.38774], [121.43103, 31.398683]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(234, 27, 57)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(234, 27, 57, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.470103, 31.200369], [121.480988, 31.20494], [121.496122, 31.207672], [121.506336, 31.214285], [121.525353, 31.215407], [121.534381, 31.217627]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(81, 45, 141)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(81, 45, 141, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.581148, 31.359297], [121.593445, 31.353883], [121.600539, 31.341305], [121.608663, 31.327228], [121.595922, 31.318355], [121.595846, 31.308625], [121.595327, 31.296804], [121.595529, 31.286432], [121.59454, 31.278007], [121.593414, 31.270058], [121.588374, 31.263292], [121.579314, 31.256659], [121.570573, 31.251659], [121.559229, 31.245588], [121.549926, 31.242115], [121.540892, 31.239044], [121.533435, 31.23485], [121.538513, 31.229007], [121.534381, 31.217627], [121.52979, 31.209399], [121.52308, 31.198949], [121.516396, 31.191286], [121.517488, 31.17825], [121.52227, 31.165247], [121.521145, 31.15557], [121.512956, 31.154788], [121.50168, 31.154367]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50029, 31.16671], [121.50273, 31.176478], [121.501124, 31.184085], [121.500749, 31.19134], [121.496122, 31.207672], [121.492716, 31.217413], [121.489485, 31.224674], [121.485885, 31.233127], [121.481033, 31.238802], [121.478011, 31.248303], [121.475411, 31.259035], [121.47525, 31.2694], [121.485807, 31.276632], [121.497039, 31.282122], [121.50817, 31.280779], [121.516066, 31.278923], [121.524804, 31.280818], [121.534441, 31.284573], [121.541405, 31.294724], [121.539677, 31.301934], [121.538472, 31.311024], [121.538559, 31.320923], [121.538527, 31.328516]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2007
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.424982, 31.181001], [121.404164, 31.17622], [121.391169, 31.172226], [121.375571, 31.163862], [121.356049, 31.161393], [121.344742, 31.155955], [121.325378, 31.143844], [121.267259, 31.123976], [121.236257, 31.110609], [121.237014, 31.090393], [121.239201, 31.060041], [121.237259, 31.036209]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2008
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.433798, 31.192584], [121.424982, 31.181001]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.569227, 31.21757], [121.563913, 31.209155], [121.556478, 31.199531], [121.546398, 31.193767], [121.531652, 31.193453], [121.516396, 31.191286], [121.507267, 31.187762], [121.501124, 31.184085], [121.492645, 31.18033], [121.480035, 31.177884], [121.463605, 31.191322], [121.461154, 31.197304], [121.456463, 31.205392], [121.456628, 31.219964], [121.453901, 31.229402], [121.448746, 31.240476], [121.444762, 31.246718], [121.436805, 31.253], [121.428339, 31.262583], [121.429033, 31.270157], [121.429488, 31.280186], [121.428059, 31.291225], [121.422947, 31.29971], [121.420162, 31.309963], [121.414775, 31.321458], [121.405224, 31.327225], [121.395296, 31.326259]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.518803, 31.06706], [121.51713, 31.079655], [121.515133, 31.089988], [121.512891, 31.102197], [121.504377, 31.124907], [121.496279, 31.146696], [121.487012, 31.159351], [121.50029, 31.16671]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(0, 158, 219)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(0, 158, 219, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2009
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.533435, 31.23485], [121.52289, 31.236125], [121.504895, 31.222656], [121.492716, 31.217413], [121.48331, 31.215357], [121.475402, 31.212073], [121.467263, 31.209004], [121.456463, 31.205392], [121.443173, 31.200871], [121.433798, 31.192584]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.365797, 31.223998], [121.333274, 31.20056], [121.327907, 31.200316], [121.307524, 31.195431]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.812958, 31.155679], [121.803224, 31.174953], [121.76216, 31.205201], [121.730308, 31.198595], [121.704499, 31.192886], [121.687295, 31.203168], [121.680337, 31.219751], [121.662625, 31.219828], [121.627183, 31.216662], [121.627183, 31.216662], [121.608557, 31.209932], [121.594061, 31.207879], [121.563913, 31.209155]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(139, 196, 63)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(139, 196, 63, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.395296, 31.326259], [121.38016, 31.328108], [121.379313, 31.350576], [121.368889, 31.363427], [121.362293, 31.370197], [121.364185, 31.394383], [121.356426, 31.407854]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(244, 113, 33)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(244, 113, 33, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.513188, 31.334451], [121.513177, 31.327743], [121.514701, 31.318613], [121.520633, 31.308746], [121.521191, 31.303805], [121.516743, 31.295352], [121.51305, 31.288214], [121.50817, 31.280779], [121.500859, 31.274187], [121.495445, 31.264649], [121.490774, 31.257732], [121.488783, 31.250088], [121.490857, 31.243738], [121.4939, 31.234005], [121.489485, 31.224674], [121.481686, 31.221998], [121.465323, 31.221939], [121.450771, 31.214439], [121.440977, 31.208554], [121.428032, 31.20317], [121.418434, 31.202693], [121.410671, 31.204634], [121.398444, 31.205074], [121.386467, 31.199878], [121.373597, 31.196049], [121.3539, 31.197476], [121.333274, 31.20056], [121.327907, 31.200316]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2010
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.386467, 31.199878], [121.37699, 31.182886], [121.37097, 31.175533], [121.361249, 31.171619]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2011
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.50168, 31.154367], [121.487012, 31.159351]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(214, 24, 112)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(214, 24, 112, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2017
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.689456, 31.277528], [121.674616, 31.274658], [121.663154, 31.272096], [121.645188, 31.268979], [121.635127, 31.270013], [121.617808, 31.266371], [121.604405, 31.258499], [121.584211, 31.247139], [121.564879, 31.238309], [121.555022, 31.233791], [121.533435, 31.23485]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(121, 201, 238)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(121, 201, 238, 0.3)',
                        shadowBlur: 5
                    }
                },
        
                {
                    // 2018
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: [{'coords': [[121.426372, 31.02433], [121.429892, 31.011737], [121.438912, 30.995618], [121.448398, 30.972266], [121.455718, 30.948118], [121.470082, 30.937138], [121.490476, 30.93837], [121.498872, 30.934518], [121.502571, 30.919789]]}],
                    silent: true,
                    effect: {
                        show: true
                    },
                    animation: false,
                    lineStyle: {
                        color: 'rgb(144, 86, 163)',
                        opacity: 1,
                        width: 2,
                        cap: 'round',
                        shadowColor: 'rgba(144, 86, 163, 0.3)',
                        shadowBlur: 5
                    }
                },
        ],},]
            }
        );

        var bmap = myChart.getModel().getComponent('bmap').getBMap();
        var styleJson = [{
            "featureType": "land",
            "elementType": "geometry",
            "stylers": {
                "visibility": "on",
                "color": "#091220ff"
            }
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": {
                "visibility": "on",
                "color": "#113549ff"
            }
        }, {
            "featureType": "green",
            "elementType": "geometry",
            "stylers": {
                "visibility": "on",
                "color": "#0e1b30ff"
            }
        }, {
            "featureType": "building",
            "elementType": "geometry",
            "stylers": {
                "visibility": "on"
            }
        }, {
            "featureType": "building",
            "elementType": "geometry.topfill",
            "stylers": {
                "color": "#113549ff"
            }
        }, {
            "featureType": "building",
            "elementType": "geometry.sidefill",
            "stylers": {
                "color": "#143e56ff"
            }
        }, {
            "featureType": "building",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#dadada00"
            }
        }, {
            "featureType": "subwaystation",
            "elementType": "geometry",
            "stylers": {
                "visibility": "on",
                "color": "#113549B2"
            }
        }, {
            "featureType": "education",
            "elementType": "geometry",
            "stylers": {
                "visibility": "on",
                "color": "#12223dff"
            }
        }, {
            "featureType": "medical",
            "elementType": "geometry",
            "stylers": {
                "visibility": "on",
                "color": "#12223dff"
            }
        }, {
            "featureType": "scenicspots",
            "elementType": "geometry",
            "stylers": {
                "visibility": "on",
                "color": "#12223dff"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "on",
                "weight": "4"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#fed66900"
            }
        }, {
            "featureType": "highway",
            "elementType": "labels",
            "stylers": {
                "visibility": "on"
            }
        }, {
            "featureType": "highway",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "highway",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "highway",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "on"
            }
        }, {
            "featureType": "arterial",
            "elementType": "geometry",
            "stylers": {
                "visibility": "on",
                "weight": "2"
            }
        }, {
            "featureType": "arterial",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "arterial",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#ffeebb00"
            }
        }, {
            "featureType": "arterial",
            "elementType": "labels",
            "stylers": {
                "visibility": "on"
            }
        }, {
            "featureType": "arterial",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "arterial",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "local",
            "elementType": "geometry",
            "stylers": {
                "visibility": "on",
                "weight": "1"
            }
        }, {
            "featureType": "local",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "local",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "local",
            "elementType": "labels",
            "stylers": {
                "visibility": "on"
            }
        }, {
            "featureType": "local",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#979c9aff"
            }
        }, {
            "featureType": "local",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffffff"
            }
        }, {
            "featureType": "railway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "subway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "weight": "1"
            }
        }, {
            "featureType": "subway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#d8d8d8ff"
            }
        }, {
            "featureType": "subway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "subway",
            "elementType": "labels",
            "stylers": {
                "visibility": "on"
            }
        }, {
            "featureType": "subway",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#979c9aff"
            }
        }, {
            "featureType": "subway",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffffff"
            }
        }, {
            "featureType": "continent",
            "elementType": "labels",
            "stylers": {
                "visibility": "on"
            }
        }, {
            "featureType": "continent",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "on"
            }
        }, {
            "featureType": "continent",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "continent",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "city",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "city",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "city",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "city",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "town",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "on"
            }
        }, {
            "featureType": "town",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "town",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#454d50ff"
            }
        }, {
            "featureType": "town",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffffff"
            }
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "poilabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "districtlabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": {
                "visibility": "on"
            }
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "district",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "poilabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "poilabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "poilabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "manmade",
            "elementType": "geometry",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "districtlabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffffff"
            }
        }, {
            "featureType": "entertainment",
            "elementType": "geometry",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "shopping",
            "elementType": "geometry",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "nationalway",
            "stylers": {
                "level": "6",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-10"
            }
        }, {
            "featureType": "nationalway",
            "stylers": {
                "level": "7",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-10"
            }
        }, {
            "featureType": "nationalway",
            "stylers": {
                "level": "8",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-10"
            }
        }, {
            "featureType": "nationalway",
            "stylers": {
                "level": "9",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-10"
            }
        }, {
            "featureType": "nationalway",
            "stylers": {
                "level": "10",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-10"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "level": "6",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-10"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "level": "7",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-10"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "level": "8",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-10"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "level": "9",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-10"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "level": "10",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-10"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "level": "6",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-10"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "level": "7",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-10"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "level": "8",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-10"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "level": "9",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-10"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "level": "10",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-10"
            }
        }, {
            "featureType": "cityhighway",
            "stylers": {
                "level": "6",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-9"
            }
        }, {
            "featureType": "cityhighway",
            "stylers": {
                "level": "7",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-9"
            }
        }, {
            "featureType": "cityhighway",
            "stylers": {
                "level": "8",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-9"
            }
        }, {
            "featureType": "cityhighway",
            "stylers": {
                "level": "9",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-9"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "level": "6",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-9"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "level": "7",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-9"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "level": "8",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-9"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "off",
                "level": "9",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-9"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "level": "6",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-9"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "level": "7",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-9"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "level": "8",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-9"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off",
                "level": "9",
                "curZoomRegionId": "0",
                "curZoomRegion": "6-9"
            }
        }, {
            "featureType": "subwaylabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "subwaylabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "tertiarywaysign",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "tertiarywaysign",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "provincialwaysign",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "provincialwaysign",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "nationalwaysign",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "nationalwaysign",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "highwaysign",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "highwaysign",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "village",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "district",
            "elementType": "labels.text",
            "stylers": {
                "fontsize": "20"
            }
        }, {
            "featureType": "district",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "district",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "country",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "country",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "tertiaryway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "tertiaryway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#ffffff10"
            }
        }, {
            "featureType": "provincialway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "provincialway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "highway",
            "elementType": "labels.text",
            "stylers": {
                "fontsize": "20"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "nationalway",
            "elementType": "labels.text",
            "stylers": {
                "fontsize": "20"
            }
        }, {
            "featureType": "provincialway",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "provincialway",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "provincialway",
            "elementType": "labels.text",
            "stylers": {
                "fontsize": "20"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "labels.text",
            "stylers": {
                "fontsize": "20"
            }
        }, {
            "featureType": "cityhighway",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "estate",
            "elementType": "geometry",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "tertiaryway",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "tertiaryway",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "fourlevelway",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "fourlevelway",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "scenicspotsway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "scenicspotsway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "universityway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "universityway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "vacationway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "vacationway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "fourlevelway",
            "elementType": "geometry",
            "stylers": {
                "visibility": "on"
            }
        }, {
            "featureType": "fourlevelway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#12223dff"
            }
        }, {
            "featureType": "fourlevelway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "transportationlabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "transportationlabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "transportationlabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "transportationlabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "educationlabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "educationlabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "educationlabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "educationlabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "transportation",
            "elementType": "geometry",
            "stylers": {
                "color": "#113549ff"
            }
        }, {
            "featureType": "airportlabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "airportlabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "scenicspotslabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "scenicspotslabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "medicallabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "medicallabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "medicallabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "scenicspotslabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "airportlabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "entertainmentlabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "entertainmentlabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "entertainmentlabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "estatelabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "estatelabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "estatelabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "businesstowerlabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "businesstowerlabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "businesstowerlabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "companylabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "companylabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "companylabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "governmentlabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "governmentlabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "governmentlabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "restaurantlabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "restaurantlabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "restaurantlabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "hotellabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "hotellabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "hotellabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "shoppinglabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "shoppinglabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "shoppinglabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "lifeservicelabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "lifeservicelabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "lifeservicelabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "carservicelabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "carservicelabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "carservicelabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "financelabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "financelabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "financelabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "otherlabel",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "otherlabel",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "otherlabel",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "manmade",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "manmade",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "transportation",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "transportation",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "education",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "education",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "medical",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "medical",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "scenicspots",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2dc4bbff"
            }
        }, {
            "featureType": "scenicspots",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff00"
            }
        }, {
            "featureType": "island",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "manmade",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "education",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "medical",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "scenicspots",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "transportation",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "water",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "airportlabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "scenicspotslabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "businesstowerlabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "companylabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "governmentlabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "restaurantlabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "hotellabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "shoppinglabel",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }]
        bmap.setMapStyleV2({ styleJson: styleJson });
        option && myChart.setOption(option);
        