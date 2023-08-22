package com.machinestalk.controllers;

import com.machinestalk.entities.Scenario;
import com.machinestalk.services.ScenarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/scenario")
@CrossOrigin(origins = "*")
public class ScenarioController {
    @Autowired
    ScenarioServiceImpl scenarioService;
    @GetMapping()
    public List<Scenario> findAll() {

        return scenarioService.findAll();
    }
    @GetMapping("/{id}")
    public Scenario findById(@PathVariable("id") Integer id) {
        return scenarioService.findById(id);
    }
    //http://localhost:8089/TestApp/create-TestApp
    @PostMapping()
    public Scenario save(@RequestBody Scenario scenario) {
        return scenarioService.save(scenario);

    }

    @PutMapping()
    public Scenario update( @RequestBody Scenario  scenario)throws Exception {
        return scenarioService.update(scenario);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable ("id") Integer id) {
        scenarioService.delete(id);
    }

}
