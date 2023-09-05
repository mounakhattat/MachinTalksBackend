var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "985",
        "ok": "985",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1591",
        "ok": "1591",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "600",
        "ok": "600",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "175",
        "ok": "175",
        "ko": "-"
    },
    "percentiles1": {
        "total": "557",
        "ok": "557",
        "ko": "-"
    },
    "percentiles2": {
        "total": "697",
        "ok": "697",
        "ko": "-"
    },
    "percentiles3": {
        "total": "965",
        "ok": "965",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1122",
        "ok": "1122",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 872,
    "percentage": 89
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 108,
    "percentage": 11
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 5,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "46.905",
        "ok": "46.905",
        "ko": "-"
    }
},
contents: {
"req_try-59dfb": {
        type: "REQUEST",
        name: "TRY",
path: "TRY",
pathFormatted: "req_try-59dfb",
stats: {
    "name": "TRY",
    "numberOfRequests": {
        "total": "985",
        "ok": "985",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1591",
        "ok": "1591",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "600",
        "ok": "600",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "175",
        "ok": "175",
        "ko": "-"
    },
    "percentiles1": {
        "total": "557",
        "ok": "557",
        "ko": "-"
    },
    "percentiles2": {
        "total": "697",
        "ok": "697",
        "ko": "-"
    },
    "percentiles3": {
        "total": "965",
        "ok": "965",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1122",
        "ok": "1122",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 872,
    "percentage": 89
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 108,
    "percentage": 11
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 5,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "46.905",
        "ok": "46.905",
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
