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
        "total": "318",
        "ok": "318",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6971",
        "ok": "6971",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1681",
        "ok": "1681",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1668",
        "ok": "1668",
        "ko": "-"
    },
    "percentiles1": {
        "total": "643",
        "ok": "643",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2818",
        "ok": "2818",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4000",
        "ok": "4000",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6450",
        "ok": "6450",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 21,
    "percentage": 53
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 3
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 18,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "5",
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
        "total": "318",
        "ok": "318",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "587",
        "ok": "587",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "387",
        "ok": "387",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "60",
        "ok": "60",
        "ko": "-"
    },
    "percentiles1": {
        "total": "372",
        "ok": "372",
        "ko": "-"
    },
    "percentiles2": {
        "total": "414",
        "ok": "414",
        "ko": "-"
    },
    "percentiles3": {
        "total": "457",
        "ok": "457",
        "ko": "-"
    },
    "percentiles4": {
        "total": "561",
        "ok": "561",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 20,
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
        "total": "2.5",
        "ok": "2.5",
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
        "total": "699",
        "ok": "699",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6971",
        "ok": "6971",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2976",
        "ok": "2976",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1486",
        "ok": "1486",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2851",
        "ok": "2851",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3796",
        "ok": "3796",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5702",
        "ok": "5702",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6717",
        "ok": "6717",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 5
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 5
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
        "total": "2.5",
        "ok": "2.5",
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
