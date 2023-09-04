var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "90",
        "ok": "90",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "393",
        "ok": "393",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2223",
        "ok": "2223",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "888",
        "ok": "888",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "643",
        "ok": "643",
        "ko": "-"
    },
    "percentiles1": {
        "total": "502",
        "ok": "502",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1431",
        "ok": "1431",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2106",
        "ok": "2106",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2183",
        "ok": "2183",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 64,
    "percentage": 71
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 25,
    "percentage": 28
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.286",
        "ok": "4.286",
        "ko": "-"
    }
},
contents: {
"req_10-d3d94": {
        type: "REQUEST",
        name: "10",
path: "10",
pathFormatted: "req_10-d3d94",
stats: {
    "name": "10",
    "numberOfRequests": {
        "total": "90",
        "ok": "90",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "393",
        "ok": "393",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2223",
        "ok": "2223",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "888",
        "ok": "888",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "643",
        "ok": "643",
        "ko": "-"
    },
    "percentiles1": {
        "total": "502",
        "ok": "502",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1431",
        "ok": "1431",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2106",
        "ok": "2106",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2183",
        "ok": "2183",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 64,
    "percentage": 71
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 25,
    "percentage": 28
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.286",
        "ok": "4.286",
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
