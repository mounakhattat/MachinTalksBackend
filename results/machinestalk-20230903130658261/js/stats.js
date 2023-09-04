var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3776",
        "ok": "3776",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1460",
        "ok": "1460",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1269",
        "ok": "1269",
        "ko": "-"
    },
    "percentiles1": {
        "total": "540",
        "ok": "540",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2815",
        "ok": "2815",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3593",
        "ok": "3593",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3771",
        "ok": "3771",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 21,
    "percentage": 53
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
    "count": 19,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    }
},
contents: {
"req_20-98f13": {
        type: "REQUEST",
        name: "20",
path: "20",
pathFormatted: "req_20-98f13",
stats: {
    "name": "20",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "424",
        "ok": "424",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "370",
        "ok": "370",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "34",
        "ok": "34",
        "ko": "-"
    },
    "percentiles1": {
        "total": "371",
        "ok": "371",
        "ko": "-"
    },
    "percentiles2": {
        "total": "397",
        "ok": "397",
        "ko": "-"
    },
    "percentiles3": {
        "total": "423",
        "ok": "423",
        "ko": "-"
    },
    "percentiles4": {
        "total": "424",
        "ok": "424",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 20,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    }
}
    },"req_20-redirect-1-70e09": {
        type: "REQUEST",
        name: "20 Redirect 1",
path: "20 Redirect 1",
pathFormatted: "req_20-redirect-1-70e09",
stats: {
    "name": "20 Redirect 1",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "656",
        "ok": "656",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3776",
        "ok": "3776",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2551",
        "ok": "2551",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "918",
        "ok": "918",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2827",
        "ok": "2827",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3128",
        "ok": "3128",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3764",
        "ok": "3764",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3774",
        "ok": "3774",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 5
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
    "count": 19,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "4",
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
