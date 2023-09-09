var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "205",
        "ok": "205",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "294",
        "ok": "294",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "24913",
        "ok": "24913",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "15814",
        "ok": "15814",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6040",
        "ok": "6040",
        "ko": "-"
    },
    "percentiles1": {
        "total": "16127",
        "ok": "16127",
        "ko": "-"
    },
    "percentiles2": {
        "total": "20696",
        "ok": "20696",
        "ko": "-"
    },
    "percentiles3": {
        "total": "24304",
        "ok": "24304",
        "ko": "-"
    },
    "percentiles4": {
        "total": "24816",
        "ok": "24816",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2,
    "percentage": 1
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
    "count": 203,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.885",
        "ok": "7.885",
        "ko": "-"
    }
},
contents: {
"req_tryrepport-569dd": {
        type: "REQUEST",
        name: "tryRepport",
path: "tryRepport",
pathFormatted: "req_tryrepport-569dd",
stats: {
    "name": "tryRepport",
    "numberOfRequests": {
        "total": "205",
        "ok": "205",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "294",
        "ok": "294",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "24913",
        "ok": "24913",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "15814",
        "ok": "15814",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6040",
        "ok": "6040",
        "ko": "-"
    },
    "percentiles1": {
        "total": "16127",
        "ok": "16127",
        "ko": "-"
    },
    "percentiles2": {
        "total": "20696",
        "ok": "20696",
        "ko": "-"
    },
    "percentiles3": {
        "total": "24304",
        "ok": "24304",
        "ko": "-"
    },
    "percentiles4": {
        "total": "24816",
        "ok": "24816",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2,
    "percentage": 1
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
    "count": 203,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.885",
        "ok": "7.885",
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
