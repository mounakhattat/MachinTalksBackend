package com.machinestalk.entities;

import com.machinestalk.enumerations.TypeTest;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Scenario implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @Enumerated(EnumType.STRING)
    private TypeTest typeTest;
    private String scenario;
    private String erreurMsg ;
    private Boolean success;
    private Date pauseTime ;
    private Long eapsedTime;
    private Date duration;
    private Integer tryMax;

    @ManyToOne(cascade = CascadeType.MERGE)
    private Paths path;
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    private Setup setup;
}
