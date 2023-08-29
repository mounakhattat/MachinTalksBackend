var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "4234",
        "ok": "4234",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "362",
        "ok": "362",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "percentiles1": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "percentiles2": {
        "total": "72",
        "ok": "72",
        "ko": "-"
    },
    "percentiles3": {
        "total": "125",
        "ok": "125",
        "ko": "-"
    },
    "percentiles4": {
        "total": "174",
        "ok": "174",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4234,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "184.087",
        "ok": "184.087",
        "ko": "-"
    }
},
contents: {
"req_string-b45cf": {
        type: "REQUEST",
        name: "string",
path: "string",
pathFormatted: "req_string-b45cf",
stats: {
    "name": "string",
    "numberOfRequests": {
        "total": "2117",
        "ok": "2117",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "34",
        "ok": "34",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "362",
        "ok": "362",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "34",
        "ok": "34",
        "ko": "-"
    },
    "percentiles1": {
        "total": "68",
        "ok": "68",
        "ko": "-"
    },
    "percentiles2": {
        "total": "90",
        "ok": "90",
        "ko": "-"
    },
    "percentiles3": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "percentiles4": {
        "total": "191",
        "ok": "191",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2117,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "92.043",
        "ok": "92.043",
        "ko": "-"
    }
}
    },"req_string-redirect-b4ec9": {
        type: "REQUEST",
        name: "string Redirect 1",
path: "string Redirect 1",
pathFormatted: "req_string-redirect-b4ec9",
stats: {
    "name": "string Redirect 1",
    "numberOfRequests": {
        "total": "2117",
        "ok": "2117",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "185",
        "ok": "185",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "percentiles1": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "percentiles2": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "percentiles3": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "percentiles4": {
        "total": "107",
        "ok": "107",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2117,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "92.043",
        "ok": "92.043",
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
