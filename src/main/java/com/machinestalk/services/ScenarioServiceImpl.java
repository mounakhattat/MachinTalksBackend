package com.machinestalk.services;

import com.machinestalk.entities.Scenario;
import com.machinestalk.repositories.ScenarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ScenarioServiceImpl  implements ScenarioService {

    ScenarioRepository scenarioRepository ;
    @Override
    public List<Scenario> findAll() {

        return scenarioRepository.findAll();
    }

    @Override
    public Scenario save(Scenario scenario) {

        return scenarioRepository.save(scenario);
    }
    @Override
    public Scenario update( Scenario scenario) throws Exception{

        return scenarioRepository.save(scenario);
    }
    @Override
    public Scenario findById(Integer id) {
        return scenarioRepository.findById(id).get();
    }
    @Override
    public void delete(Integer id) {
        scenarioRepository.deleteById(id);
    }



}
