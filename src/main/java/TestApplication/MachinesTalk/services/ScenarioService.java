package TestApplication.MachinesTalk.services;

import TestApplication.MachinesTalk.entities.Paths;
import TestApplication.MachinesTalk.entities.Scenario;

import java.util.List;

public interface ScenarioService {
    List<Scenario> findAll();

    Scenario save (Scenario scenario);

    Scenario update ( Scenario scenario) throws Exception;

    Scenario findById (Integer id);

    void delete(Integer id);

}
