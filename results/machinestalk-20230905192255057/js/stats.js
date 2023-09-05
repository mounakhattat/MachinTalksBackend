var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1000",
        "ok": "399",
        "ko": "601"
    },
    "minResponseTime": {
        "total": "1732",
        "ok": "1732",
        "ko": "7586"
    },
    "maxResponseTime": {
        "total": "60015",
        "ok": "55751",
        "ko": "60015"
    },
    "meanResponseTime": {
        "total": "16051",
        "ok": "23105",
        "ko": "11367"
    },
    "standardDeviation": {
        "total": "8908",
        "ok": "9218",
        "ko": "4544"
    },
    "percentiles1": {
        "total": "11091",
        "ok": "23730",
        "ko": "10015"
    },
    "percentiles2": {
        "total": "21912",
        "ok": "27432",
        "ko": "11091"
    },
    "percentiles3": {
        "total": "31625",
        "ok": "38710",
        "ko": "17331"
    },
    "percentiles4": {
        "total": "46399",
        "ok": "47860",
        "ko": "17381"
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
    "count": 399,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 601,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.393",
        "ok": "6.541",
        "ko": "9.852"
    }
},
contents: {
"req_fiw-max-58e17": {
        type: "REQUEST",
        name: "fiw MAx",
path: "fiw MAx",
pathFormatted: "req_fiw-max-58e17",
stats: {
    "name": "fiw MAx",
    "numberOfRequests": {
        "total": "1000",
        "ok": "399",
        "ko": "601"
    },
    "minResponseTime": {
        "total": "1732",
        "ok": "1732",
        "ko": "7586"
    },
    "maxResponseTime": {
        "total": "60015",
        "ok": "55751",
        "ko": "60015"
    },
    "meanResponseTime": {
        "total": "16051",
        "ok": "23105",
        "ko": "11367"
    },
    "standardDeviation": {
        "total": "8908",
        "ok": "9218",
        "ko": "4544"
    },
    "percentiles1": {
        "total": "11091",
        "ok": "23730",
        "ko": "10015"
    },
    "percentiles2": {
        "total": "21912",
        "ok": "27432",
        "ko": "11091"
    },
    "percentiles3": {
        "total": "31625",
        "ok": "38710",
        "ko": "17331"
    },
    "percentiles4": {
        "total": "46399",
        "ok": "47860",
        "ko": "17381"
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
    "count": 399,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 601,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.393",
        "ok": "6.541",
        "ko": "9.852"
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
