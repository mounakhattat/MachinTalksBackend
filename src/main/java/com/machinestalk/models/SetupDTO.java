package com.machinestalk.models;

import com.machinestalk.entities.Scenario;
import lombok.Data;

import java.util.List;

@Data

public class SetupDTO {

    private Integer id;
    private String cle;
    private String name;
    private List<Scenario> scenarios;
    private List<Integer> valueSaisie ;





}