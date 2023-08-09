package TestApplication.MachinesTalk.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
public class Application implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private Integer numPort;
    private String protocol;
    private String basicUrl;

@JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "application")
    private List<Paths> paths;


}
