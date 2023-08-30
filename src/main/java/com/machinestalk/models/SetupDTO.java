package com.machinestalk.models;

import com.machinestalk.entities.Scenario;
import com.machinestalk.enumerations.TypeTest;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data

public class SetupDTO {

    private Integer id;
    private String cle;
    private String name;
    private String tokenValue;
    private List<ScenarioDTO> scenarios;
    private List<Integer> valueSaisie ;
    private List<Integer> customizedValue ;
    private Set<TypeTest> customizedTypes ;







}