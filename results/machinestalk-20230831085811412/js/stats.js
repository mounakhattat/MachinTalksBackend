var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "421",
        "ok": "421",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "121",
        "ok": "121",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "90",
        "ok": "90",
        "ko": "-"
    },
    "percentiles1": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "percentiles2": {
        "total": "179",
        "ok": "179",
        "ko": "-"
    },
    "percentiles3": {
        "total": "289",
        "ok": "289",
        "ko": "-"
    },
    "percentiles4": {
        "total": "353",
        "ok": "353",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 100,
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
        "total": "16.667",
        "ok": "16.667",
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
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "38",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "421",
        "ok": "421",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "179",
        "ok": "179",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "90",
        "ok": "90",
        "ko": "-"
    },
    "percentiles1": {
        "total": "179",
        "ok": "179",
        "ko": "-"
    },
    "percentiles2": {
        "total": "232",
        "ok": "232",
        "ko": "-"
    },
    "percentiles3": {
        "total": "345",
        "ok": "345",
        "ko": "-"
    },
    "percentiles4": {
        "total": "387",
        "ok": "387",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 50,
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
        "total": "8.333",
        "ok": "8.333",
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
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "171",
        "ok": "171",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "63",
        "ok": "63",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "39",
        "ok": "39",
        "ko": "-"
    },
    "percentiles1": {
        "total": "64",
        "ok": "64",
        "ko": "-"
    },
    "percentiles2": {
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "percentiles3": {
        "total": "125",
        "ok": "125",
        "ko": "-"
    },
    "percentiles4": {
        "total": "153",
        "ok": "153",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 50,
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
        "total": "8.333",
        "ok": "8.333",
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
