package com.machinestalk.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.machinestalk.entities.Paths;
import com.machinestalk.entities.Setup;
import com.machinestalk.enumerations.TypeTest;
import jakarta.persistence.CascadeType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.util.Date;
@Data
public class ScenarioDTO {
    private Integer id;
    private String name;
    @Enumerated(EnumType.STRING)
    private TypeTest typeTest;
    private String scenario;

    //  private List<Integer> usersNumber;
    @ManyToOne(cascade = CascadeType.MERGE)
    private Paths path;
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    private Setup setup;



}
