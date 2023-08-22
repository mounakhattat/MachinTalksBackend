package com.machinestalk.services;

import com.machinestalk.entities.Scenario;

import java.util.List;

public interface ScenarioService {
    List<Scenario> findAll();

    Scenario save (Scenario scenario);

    Scenario update ( Scenario scenario) throws Exception;

    Scenario findById (Integer id);

    void delete(Integer id);

}
