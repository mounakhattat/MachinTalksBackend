var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10100",
        "ok": "589",
        "ko": "9511"
    },
    "minResponseTime": {
        "total": "450",
        "ok": "450",
        "ko": "7397"
    },
    "maxResponseTime": {
        "total": "60017",
        "ok": "59981",
        "ko": "60017"
    },
    "meanResponseTime": {
        "total": "13902",
        "ok": "31301",
        "ko": "12825"
    },
    "standardDeviation": {
        "total": "12453",
        "ok": "20724",
        "ko": "10870"
    },
    "percentiles1": {
        "total": "10011",
        "ok": "35894",
        "ko": "10010"
    },
    "percentiles2": {
        "total": "10015",
        "ok": "49996",
        "ko": "10015"
    },
    "percentiles3": {
        "total": "56608",
        "ok": "58230",
        "ko": "43903"
    },
    "percentiles4": {
        "total": "60012",
        "ok": "59708",
        "ko": "60012"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 57,
    "percentage": 1
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 30,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 502,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 9511,
    "percentage": 94
},
    "meanNumberOfRequestsPerSecond": {
        "total": "84.874",
        "ok": "4.95",
        "ko": "79.924"
    }
},
contents: {
"req_try-it-bb433": {
        type: "REQUEST",
        name: "try it",
path: "try it",
pathFormatted: "req_try-it-bb433",
stats: {
    "name": "try it",
    "numberOfRequests": {
        "total": "10100",
        "ok": "589",
        "ko": "9511"
    },
    "minResponseTime": {
        "total": "450",
        "ok": "450",
        "ko": "7397"
    },
    "maxResponseTime": {
        "total": "60017",
        "ok": "59981",
        "ko": "60017"
    },
    "meanResponseTime": {
        "total": "13902",
        "ok": "31301",
        "ko": "12825"
    },
    "standardDeviation": {
        "total": "12453",
        "ok": "20724",
        "ko": "10870"
    },
    "percentiles1": {
        "total": "10011",
        "ok": "35894",
        "ko": "10010"
    },
    "percentiles2": {
        "total": "10015",
        "ok": "49996",
        "ko": "10015"
    },
    "percentiles3": {
        "total": "56608",
        "ok": "58230",
        "ko": "43903"
    },
    "percentiles4": {
        "total": "60012",
        "ok": "59708",
        "ko": "60012"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 57,
    "percentage": 1
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 30,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 502,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 9511,
    "percentage": 94
},
    "meanNumberOfRequestsPerSecond": {
        "total": "84.874",
        "ok": "4.95",
        "ko": "79.924"
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
