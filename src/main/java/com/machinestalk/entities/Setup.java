package com.machinestalk.entities;


import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.io.Serializable;
import java.util.List;

@Entity
@Data
public class Setup implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String cle;
    private String name;

    @OneToMany( mappedBy="setup", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Scenario> Scenarios;
}
