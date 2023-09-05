var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "27",
        "ok": "27",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "437",
        "ok": "437",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1014",
        "ok": "1014",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "163",
        "ok": "163",
        "ko": "-"
    },
    "percentiles1": {
        "total": "660",
        "ok": "660",
        "ko": "-"
    },
    "percentiles2": {
        "total": "812",
        "ok": "812",
        "ko": "-"
    },
    "percentiles3": {
        "total": "958",
        "ok": "958",
        "ko": "-"
    },
    "percentiles4": {
        "total": "999",
        "ok": "999",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 18,
    "percentage": 67
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 9,
    "percentage": 33
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
        "total": "9",
        "ok": "9",
        "ko": "-"
    }
},
contents: {
"req_amir-89da0": {
        type: "REQUEST",
        name: "AMir",
path: "AMir",
pathFormatted: "req_amir-89da0",
stats: {
    "name": "AMir",
    "numberOfRequests": {
        "total": "27",
        "ok": "27",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "437",
        "ok": "437",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1014",
        "ok": "1014",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "163",
        "ok": "163",
        "ko": "-"
    },
    "percentiles1": {
        "total": "660",
        "ok": "660",
        "ko": "-"
    },
    "percentiles2": {
        "total": "812",
        "ok": "812",
        "ko": "-"
    },
    "percentiles3": {
        "total": "958",
        "ok": "958",
        "ko": "-"
    },
    "percentiles4": {
        "total": "999",
        "ok": "999",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 18,
    "percentage": 67
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 9,
    "percentage": 33
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
        "total": "9",
        "ok": "9",
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
