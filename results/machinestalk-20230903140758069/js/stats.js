var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "345",
        "ok": "345",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4137",
        "ok": "4137",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1597",
        "ok": "1597",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1232",
        "ok": "1232",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1344",
        "ok": "1344",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2873",
        "ok": "2873",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3454",
        "ok": "3454",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4007",
        "ok": "4007",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 16,
    "percentage": 40
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 22,
    "percentage": 55
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.667",
        "ok": "6.667",
        "ko": "-"
    }
},
contents: {
"req_20-98f13": {
        type: "REQUEST",
        name: "20",
path: "20",
pathFormatted: "req_20-98f13",
stats: {
    "name": "20",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "345",
        "ok": "345",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1701",
        "ok": "1701",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "630",
        "ok": "630",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "438",
        "ok": "438",
        "ko": "-"
    },
    "percentiles1": {
        "total": "407",
        "ok": "407",
        "ko": "-"
    },
    "percentiles2": {
        "total": "625",
        "ok": "625",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1449",
        "ok": "1449",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1651",
        "ok": "1651",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 16,
    "percentage": 80
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 4,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
    }
}
    },"req_20-redirect-1-70e09": {
        type: "REQUEST",
        name: "20 Redirect 1",
path: "20 Redirect 1",
pathFormatted: "req_20-redirect-1-70e09",
stats: {
    "name": "20 Redirect 1",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "843",
        "ok": "843",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4137",
        "ok": "4137",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2563",
        "ok": "2563",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "988",
        "ok": "988",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2939",
        "ok": "2939",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3239",
        "ok": "3239",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3820",
        "ok": "3820",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4074",
        "ok": "4074",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 10
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 18,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}