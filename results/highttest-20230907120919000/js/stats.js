var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "44961",
        "ok": "0",
        "ko": "44961"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60018",
        "ok": "-",
        "ko": "60018"
    },
    "meanResponseTime": {
        "total": "9138",
        "ok": "-",
        "ko": "9138"
    },
    "standardDeviation": {
        "total": "9048",
        "ok": "-",
        "ko": "9048"
    },
    "percentiles1": {
        "total": "10173",
        "ok": "-",
        "ko": "10170"
    },
    "percentiles2": {
        "total": "15066",
        "ok": "-",
        "ko": "15063"
    },
    "percentiles3": {
        "total": "23855",
        "ok": "-",
        "ko": "23846"
    },
    "percentiles4": {
        "total": "35398",
        "ok": "-",
        "ko": "35398"
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
    "count": 44961,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "624.458",
        "ok": "-",
        "ko": "624.458"
    }
},
contents: {
"req_killtest-e5c49": {
        type: "REQUEST",
        name: "KillTest",
path: "KillTest",
pathFormatted: "req_killtest-e5c49",
stats: {
    "name": "KillTest",
    "numberOfRequests": {
        "total": "44961",
        "ok": "0",
        "ko": "44961"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60018",
        "ok": "-",
        "ko": "60018"
    },
    "meanResponseTime": {
        "total": "9138",
        "ok": "-",
        "ko": "9138"
    },
    "standardDeviation": {
        "total": "9048",
        "ok": "-",
        "ko": "9048"
    },
    "percentiles1": {
        "total": "10171",
        "ok": "-",
        "ko": "10162"
    },
    "percentiles2": {
        "total": "15064",
        "ok": "-",
        "ko": "15065"
    },
    "percentiles3": {
        "total": "23849",
        "ok": "-",
        "ko": "23846"
    },
    "percentiles4": {
        "total": "35398",
        "ok": "-",
        "ko": "35398"
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
    "count": 44961,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "624.458",
        "ok": "-",
        "ko": "624.458"
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
