var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "57",
        "ok": "57",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "429",
        "ok": "429",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1060",
        "ok": "1060",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "781",
        "ok": "781",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "192",
        "ok": "192",
        "ko": "-"
    },
    "percentiles1": {
        "total": "835",
        "ok": "835",
        "ko": "-"
    },
    "percentiles2": {
        "total": "939",
        "ok": "939",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1032",
        "ok": "1032",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1051",
        "ok": "1051",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 26,
    "percentage": 46
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 31,
    "percentage": 54
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
        "total": "9.5",
        "ok": "9.5",
        "ko": "-"
    }
},
contents: {
"req_atack-2-topnet-61e3e": {
        type: "REQUEST",
        name: "Atack 2 topnet",
path: "Atack 2 topnet",
pathFormatted: "req_atack-2-topnet-61e3e",
stats: {
    "name": "Atack 2 topnet",
    "numberOfRequests": {
        "total": "57",
        "ok": "57",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "429",
        "ok": "429",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1060",
        "ok": "1060",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "781",
        "ok": "781",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "192",
        "ok": "192",
        "ko": "-"
    },
    "percentiles1": {
        "total": "835",
        "ok": "835",
        "ko": "-"
    },
    "percentiles2": {
        "total": "939",
        "ok": "939",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1032",
        "ok": "1032",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1051",
        "ok": "1051",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 26,
    "percentage": 46
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 31,
    "percentage": 54
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
        "total": "9.5",
        "ok": "9.5",
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
