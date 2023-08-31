package com.machinestalk.entities;

import com.machinestalk.enumerations.RequestType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Entity
    @Data

    public class Paths implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String path;
    @Enumerated(EnumType.STRING)
    private RequestType requestType;

    @ManyToOne
    private Application application;

    @OneToMany( mappedBy="pathsss", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Parameters> parameters;
    @JsonIgnore
    @OneToMany(mappedBy = "path")
    private List<Scenario> scenarios=  new ArrayList<>();


}
