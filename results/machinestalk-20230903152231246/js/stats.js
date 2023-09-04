var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "51",
        "ok": "51",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "555",
        "ok": "555",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2191",
        "ok": "2191",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1451",
        "ok": "1451",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "458",
        "ok": "458",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1404",
        "ok": "1404",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1857",
        "ok": "1857",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2062",
        "ok": "2062",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2184",
        "ok": "2184",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 6,
    "percentage": 12
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 5,
    "percentage": 10
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 40,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.2",
        "ok": "10.2",
        "ko": "-"
    }
},
contents: {
"req_topnet-139a5": {
        type: "REQUEST",
        name: "Topnet",
path: "Topnet",
pathFormatted: "req_topnet-139a5",
stats: {
    "name": "Topnet",
    "numberOfRequests": {
        "total": "51",
        "ok": "51",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "555",
        "ok": "555",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2191",
        "ok": "2191",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1451",
        "ok": "1451",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "458",
        "ok": "458",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1404",
        "ok": "1404",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1857",
        "ok": "1857",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2062",
        "ok": "2062",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2184",
        "ok": "2184",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 6,
    "percentage": 12
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 5,
    "percentage": 10
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 40,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.2",
        "ok": "10.2",
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
