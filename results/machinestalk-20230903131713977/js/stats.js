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
        "total": "316",
        "ok": "316",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4195",
        "ok": "4195",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1588",
        "ok": "1588",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1332",
        "ok": "1332",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1171",
        "ok": "1171",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3049",
        "ok": "3049",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3541",
        "ok": "3541",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4152",
        "ok": "4152",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 19,
    "percentage": 48
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
    "count": 20,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8",
        "ok": "8",
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
        "total": "316",
        "ok": "316",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1289",
        "ok": "1289",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "411",
        "ok": "411",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "percentiles1": {
        "total": "364",
        "ok": "364",
        "ko": "-"
    },
    "percentiles2": {
        "total": "388",
        "ok": "388",
        "ko": "-"
    },
    "percentiles3": {
        "total": "449",
        "ok": "449",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1121",
        "ok": "1121",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 19,
    "percentage": 95
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
    "count": 1,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "4",
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
        "total": "1089",
        "ok": "1089",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4195",
        "ok": "4195",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2765",
        "ok": "2765",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "859",
        "ok": "859",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3057",
        "ok": "3057",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3318",
        "ok": "3318",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4090",
        "ok": "4090",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4174",
        "ok": "4174",
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
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 19,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "4",
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
