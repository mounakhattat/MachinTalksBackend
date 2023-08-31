package com.machinestalk.controllers;

import com.machinestalk.entities.Setup;
import com.machinestalk.geenerateclass.ClassGenerated;
import com.machinestalk.geenerateclass.GenerateRapport;
import com.machinestalk.models.SetupDTO;
import com.machinestalk.services.GenerationServiceImpl;
import com.machinestalk.services.SetupServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/setup")
@CrossOrigin(origins = "*")
public class SetupController {
    @Autowired
    SetupServiceImpl setupService;
    @Autowired
    ClassGenerated classGenerated;
    @Autowired
    GenerationServiceImpl generationService;
    @Autowired
    GenerateRapport generateRapport;
    @GetMapping()
    public List<Setup> findAll() {
        return setupService.findAll();
    }
    @GetMapping("/{id}")
    public Setup findById(@PathVariable("id") Integer id) {
        return setupService.findById(id);
    }
    //http://localhost:8089/TestApp/create-TestApp
  /*  @PostMapping()
    public Setup save(@RequestBody Setup setup) throws Exception {
        return setupService.save(setup);

    }*/

    @PutMapping()
    public Setup update( @RequestBody Setup setup) {
        return setupService.update(setup);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable ("id") Integer id) {
        setupService.delete(id);
    }

    @PostMapping()
    public void Generation(@RequestBody SetupDTO setupDto) {
        Setup setupEntity = new Setup();
        setupEntity.setCle(setupDto.getCle());
        setupEntity.setId(setupDto.getId());
        setupEntity.setName(setupDto.getName());
        setupEntity.setScenarios(setupDto.getScenarios());
        try {
            setupService.save(setupEntity);
            classGenerated.testing(setupDto);
        } catch (Throwable t) {
            t.printStackTrace();
        }

    }
    @GetMapping("/rapport")
    public String Rapport (){
        generateRapport.Rapport();
        String obj= generationService.URPpath();
        return obj;
    }

}
