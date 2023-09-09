var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "37",
        "ok": "37",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "437",
        "ok": "437",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1063",
        "ok": "1063",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "751",
        "ok": "751",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "percentiles1": {
        "total": "740",
        "ok": "740",
        "ko": "-"
    },
    "percentiles2": {
        "total": "827",
        "ok": "827",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1033",
        "ok": "1033",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1056",
        "ok": "1056",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 25,
    "percentage": 68
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 12,
    "percentage": 32
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
        "total": "9.25",
        "ok": "9.25",
        "ko": "-"
    }
},
contents: {
"req_mortadha-sc-c0c60": {
        type: "REQUEST",
        name: "mortadha sc",
path: "mortadha sc",
pathFormatted: "req_mortadha-sc-c0c60",
stats: {
    "name": "mortadha sc",
    "numberOfRequests": {
        "total": "37",
        "ok": "37",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "437",
        "ok": "437",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1063",
        "ok": "1063",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "751",
        "ok": "751",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "percentiles1": {
        "total": "740",
        "ok": "740",
        "ko": "-"
    },
    "percentiles2": {
        "total": "827",
        "ok": "827",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1033",
        "ok": "1033",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1056",
        "ok": "1056",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 25,
    "percentage": 68
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 12,
    "percentage": 32
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
        "total": "9.25",
        "ok": "9.25",
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
