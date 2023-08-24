package com.machinestalk.entities;

import lombok.Data;

import java.util.List;

@Data

public class SetupDTO {

    private Integer id;
    private String cle;
    private String name;
    private List<Scenario> Scenarios;
    private List<Long> durings;
    private List<Integer> nothingFor;
    private List<Integer> constantUsers;
    private List<Integer> stressPeakUsers;
    private List<Integer> rampUsersPerSec;


}