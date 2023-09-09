var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "41",
        "ok": "41",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "470",
        "ok": "470",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1759",
        "ok": "1759",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "822",
        "ok": "822",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "percentiles1": {
        "total": "766",
        "ok": "766",
        "ko": "-"
    },
    "percentiles2": {
        "total": "822",
        "ok": "822",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1407",
        "ok": "1407",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1709",
        "ok": "1709",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 29,
    "percentage": 71
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 6,
    "percentage": 15
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 6,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.2",
        "ok": "8.2",
        "ko": "-"
    }
},
contents: {
"req_try-3-6efdc": {
        type: "REQUEST",
        name: "try 3",
path: "try 3",
pathFormatted: "req_try-3-6efdc",
stats: {
    "name": "try 3",
    "numberOfRequests": {
        "total": "41",
        "ok": "41",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "470",
        "ok": "470",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1759",
        "ok": "1759",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "822",
        "ok": "822",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "percentiles1": {
        "total": "766",
        "ok": "766",
        "ko": "-"
    },
    "percentiles2": {
        "total": "822",
        "ok": "822",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1407",
        "ok": "1407",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1709",
        "ok": "1709",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 29,
    "percentage": 71
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 6,
    "percentage": 15
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 6,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.2",
        "ok": "8.2",
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
