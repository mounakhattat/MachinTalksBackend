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
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10632",
        "ok": "10632",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "814",
        "ok": "814",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1709",
        "ok": "1709",
        "ko": "-"
    },
    "percentiles1": {
        "total": "210",
        "ok": "210",
        "ko": "-"
    },
    "percentiles2": {
        "total": "432",
        "ok": "432",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3135",
        "ok": "3135",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8412",
        "ok": "8412",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 81,
    "percentage": 81
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 17,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.25",
        "ok": "6.25",
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
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10632",
        "ok": "10632",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1328",
        "ok": "1328",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2231",
        "ok": "2231",
        "ko": "-"
    },
    "percentiles1": {
        "total": "254",
        "ok": "254",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1378",
        "ok": "1378",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6667",
        "ok": "6667",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9533",
        "ok": "9533",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 34,
    "percentage": 68
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 4
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 14,
    "percentage": 28
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.125",
        "ok": "3.125",
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
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3006",
        "ok": "3006",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "300",
        "ok": "300",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "581",
        "ok": "581",
        "ko": "-"
    },
    "percentiles1": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "percentiles2": {
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1043",
        "ok": "1043",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2919",
        "ok": "2919",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 47,
    "percentage": 94
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
    "count": 3,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.125",
        "ok": "3.125",
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
